#include <Arduino.h>
#include <WiFiManager.h>
#include <Logger.h>

#include <Wire.h>
#include <SPI.h>
#include <Adafruit_PWMServoDriver.h>
#include <Preferences.h>
#include <ESPmDNS.h>
#include <SPIFFS.h>
#include <ArduinoJson.h>
#include <AsyncJson.h>
#include <ESPAsyncWebServer.h>

#include "config.h"
#include "utils.h"

#define SERVOMIN  200 // this is the 'minimum' pulse length count (out of 4096)
#define SERVOMAX  600 // this is the 'maximum' pulse length count (out of 4096)

Button resetButton(4);
Preferences preferences;
WiFiManager wifiManager;
AsyncWebServer server{80};
Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver();

struct {
    bool littleFinger = false;
    bool ringFinger = false;
    bool middleFinger = false;
    bool indexFinger = false;
    bool thumb = false;
    int speed = 1;
} control;

void initMDSN() {
    if(!MDNS.begin("handmotion")) {
        Serial.println("Error starting mDNS");
        return;
    }
}

static void notFound(AsyncWebServerRequest *request) {
    request->send(404, "application/json", "{\"message\":\"Not found\"}");
}

static void getLanguage(AsyncWebServerRequest *request) {
    AsyncJsonResponse * response = new AsyncJsonResponse();
    JsonVariant& jsonObj = response->getRoot();

    jsonObj["Language"] = preferences.getString("Language", "pt");

    response->setLength();
    request->send(response);
};

static void getControl(AsyncWebServerRequest *request) {
    AsyncJsonResponse * response = new AsyncJsonResponse();
    JsonVariant& jsonObj = response->getRoot();

    jsonObj["Little finger"] = control.littleFinger;
    jsonObj["Ring finger"] = control.ringFinger;
    jsonObj["Middle finger"] = control.middleFinger;
    jsonObj["Index finger"] = control.indexFinger;
    jsonObj["Thumb"] = control.thumb;
    jsonObj["Speed"] = control.speed;

    response->setLength();
    request->send(response);
};

static void getStatistics(AsyncWebServerRequest *request) {
    AsyncJsonResponse * response = new AsyncJsonResponse();
    JsonVariant& jsonObj = response->getRoot();

    jsonObj["SDK Version"] = ESP.getSdkVersion();
    jsonObj["WiFi Mode"] = WiFi.getMode();
    jsonObj["MAC Address"] = WiFi.macAddress();
    jsonObj["Temperature"] = temperatureRead();
    jsonObj["Uptime"] = esp_timer_get_time();
    jsonObj["Free Heap"] = ESP.getFreeHeap();
    jsonObj["Total Heap"] = ESP.getHeapSize();
    jsonObj["Flash Size"] = ESP.getFlashChipSize();
    jsonObj["Available Size"] = ESP.getFlashChipSize() - ESP.getSketchSize();

    response->setLength();
    request->send(response);
}

AsyncCallbackJsonWebHandler* servoHandle = new AsyncCallbackJsonWebHandler("/servo", [](AsyncWebServerRequest *request, JsonVariant &json) {
    JsonObject jsonObj = json.as<JsonObject>();

    LOG(Debug, "SERVO");

    control.littleFinger = jsonObj["Little finger"].as<bool>();
    control.ringFinger = jsonObj["Ring finger"].as<bool>();
    control.middleFinger = jsonObj["Middle finger"].as<bool>();
    control.indexFinger = jsonObj["Index finger"].as<bool>();
    control.thumb = jsonObj["Thumb"].as<bool>();
    control.speed = jsonObj["Speed"].as<int>();

    request->send(200, "text/plain", "RECEIVED");
});

void setup() {
    Serial.begin(115200);
    LOG(Info, "Initializing...");

    LOG(Debug, "Initializing Preferences...");
    preferences.begin("handmotion");
    LOG(Debug, "Preferences initialized.");

    wifiManager.setHostname("handmotion");
    if (!wifiManager.autoConnect("HANDMOTION-DEVICE", "handmotion")) {
        LOG(Error, "Failed to connect to WiFi and hit timeout.");
        delay(3000);
        ESP.restart();
    }

    LOG(Debug, "WiFi connected.");

    pwm.begin();
    pwm.setPWMFreq(50);

    if(!SPIFFS.begin(true)){
        LOG(Error, "An error has occurred while mounting SPIFFS");
        return;
    }

    server.onNotFound(notFound);
    server.addHandler(servoHandle);
    server.on("/", HTTP_GET, [](AsyncWebServerRequest *request) {request->send(SPIFFS, "/index.html", "text/html");});
    server.on("/index.js", HTTP_GET, [](AsyncWebServerRequest *request) {request->send(SPIFFS, "/index.js", "text/javascript");});
    server.on("/get/language", HTTP_GET, getLanguage);
    server.on("/get/control", HTTP_GET, getControl);
    server.on("/get/statistics", HTTP_GET, getStatistics);
    server.on("/jquery.min.js", HTTP_GET, [](AsyncWebServerRequest *request) {request->send(SPIFFS, "/jquery.min.js", "text/javascript");});
    server.on("/language.js", HTTP_GET, [](AsyncWebServerRequest *request) {request->send(SPIFFS, "/language.js", "text/javascript");});
    server.on("/languages.json", HTTP_GET, [](AsyncWebServerRequest *request) {request->send(SPIFFS, "/languages.json", "text/json");});
    server.on("/tailwind.config.js", HTTP_GET, [](AsyncWebServerRequest *request) {request->send(SPIFFS, "/tailwind.config.js", "text/javascript");});
    server.on("/tailwind.js", HTTP_GET, [](AsyncWebServerRequest *request) {request->send(SPIFFS, "/tailwind.js", "text/javascript");});
    server.on("/favicon.svg", HTTP_GET, [](AsyncWebServerRequest *request) {request->send(SPIFFS, "/favicon.svg", "image/svg+xml");});

    delay(1000);
    server.begin();
    LOG(Debug, "Server initialized.");

    LOG(Debug, "Initializing mDNS...");
    initMDSN();
    LOG(Debug, "mDNS initialized.");

    LOG(Info, "You can now connect to http://handmotion.local or http://%s", WiFi.localIP().toString().c_str());
}

void reset() {
    Serial.println("Inicial reset...");
    ESP.restart();
};

void factoryReset() {
    Serial.println("Inicial factory reset...");
    preferences.clear();
    wifiManager.resetSettings();
    delay(1000);
    ESP.restart();
};

int angle = 0;
bool direction = true;

void loop() {
    switch (resetButton.read()) {
        case ButtonStates::SHORT: reset(); break;
        case ButtonStates::LONG: factoryReset(); break;
    };   

    pwm.setPWM(0, 0, control.thumb ? map(angle, 0, 120, SERVOMIN, SERVOMAX) : map(120, 0, 120, SERVOMIN, SERVOMAX));
    pwm.setPWM(1, 0, control.indexFinger ? map(120 - angle, 0, 120, SERVOMIN, SERVOMAX) : map(0, 0, 120, SERVOMIN, SERVOMAX));
    pwm.setPWM(2, 0, control.middleFinger ? map(angle, 0, 120, SERVOMIN, SERVOMAX) : map(120, 0, 120, SERVOMIN, SERVOMAX));
    pwm.setPWM(3, 0, control.ringFinger ? map(120 - angle, 0, 120, SERVOMIN, SERVOMAX) : map(0, 0, 120, SERVOMIN, SERVOMAX));
    pwm.setPWM(4, 0, control.littleFinger ? map(angle, 0, 120, SERVOMIN, SERVOMAX) : map(120, 0, 120, SERVOMIN, SERVOMAX));

    if (angle == 120) direction = false;
    if (angle == 1) direction = true;

    if (direction) angle++;
    else angle-- ;
    delay(((-2 * control.speed + 12) * 1000) / 120);
}