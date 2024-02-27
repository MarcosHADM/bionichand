#ifndef SERVER_H
#define SERVER_H

#include <ArduinoJson.h>
#include <AsyncJson.h>
#include <ESPAsyncWebServer.h>
#include <SPIFFS.h>

#include "PreferencesMemory/PreferencesMemory.h"
#include "Wifi/Wifi.h"

#include "config.h"
#include "utils.h"

class Server_Class {
    private:
        AsyncWebServer server{80};

        static void notFound(AsyncWebServerRequest *request) {
            request->send(404, "application/json", "{\"message\":\"Not found\"}");
        }

        static void wifiScan(AsyncWebServerRequest *request) {
            AsyncJsonResponse * response = new AsyncJsonResponse();
            JsonVariant& jsonObj = response->getRoot();
            
            if (!Wifi.scan(jsonObj)) {
                request->send(200, "text/json", "[]");
                return;
            }

            response->setLength();
            request->send(response);
        };

        static void getLanguage(AsyncWebServerRequest *request) {
            AsyncJsonResponse * response = new AsyncJsonResponse();
            JsonVariant& jsonObj = response->getRoot();

            jsonObj["Language"] = PreferencesMemory.getString("Language", "en");

            response->setLength();
            request->send(response);
        };

        AsyncCallbackJsonWebHandler* servoHandle = new AsyncCallbackJsonWebHandler("/servo", [](AsyncWebServerRequest *request, JsonVariant &json) {
            JsonObject jsonObj = json.as<JsonObject>();

            LOG(Debug, "SERVO");
            LOG(Debug, "Little Finger: %d", jsonObj["Little Finger"].as<bool>());
            LOG(Debug, "Ring Finger: %d", jsonObj["Ring Finger"].as<bool>());
            LOG(Debug, "Middle Finger: %d", jsonObj["Middle Finger"].as<bool>());
            LOG(Debug, "Index Finger: %d", jsonObj["Index Finger"].as<bool>());
            LOG(Debug, "Thumb: %d", jsonObj["Thumb"].as<bool>());
            LOG(Debug, "Speed: %d", jsonObj["Speed"].as<int>());

            request->send(200, "text/plain", "RECEIVED");
        });

        AsyncCallbackJsonWebHandler* wifiConnectHandle = new AsyncCallbackJsonWebHandler("/wifi/connect", [](AsyncWebServerRequest *request, JsonVariant &json) {
            JsonObject jsonObj = json.as<JsonObject>();

            if (jsonObj["ssid"].isNull() || jsonObj["ssid"].as<String>().length() < 1 || jsonObj["ssid"].as<String>().length() > 32) {
                request->send(400, "text/plain", "Bad Request");
                return;
            }
            if (jsonObj["isSecure"]) {
                if (jsonObj["password"].isNull()
                || jsonObj["password"].as<String>().length() > 64
                || jsonObj["password"].as<String>().length() < 8) {
                    request->send(401, "text/plain", "WiFi Needs Password");
                    return;
                }
            }

            if (jsonObj["type"].as<String>() == "check") {
                Wifi.checkConnect(jsonObj["ssid"].as<String>(), jsonObj["password"].as<String>());
                
                request->send(200, "text/plain", "OK");
            }
            else if (jsonObj["type"].as<String>() == "response") {
                wifi_check_status_t result = Wifi.resultCheckConnect(jsonObj["ssid"].as<String>(), jsonObj["password"].as<String>());
                switch (result) {
                    case WIFI_CHECKING:
                        request->send(200, "text/plain", "Checking");
                        break;

                    case WIFI_SUCCESS:
                        request->send(200, "text/plain", "OK");
                        break;
                    
                    default:
                        request->send(401, "text/plain", "WiFi Connect Failed");
                        break;
                }
            }
            
        });
        
        AsyncCallbackJsonWebHandler* setupHandle = new AsyncCallbackJsonWebHandler("/setup", [](AsyncWebServerRequest *request, JsonVariant &json) {
            JsonObject jsonObj = json.as<JsonObject>();

            if (jsonObj["Language"].isNull() || jsonObj["Language"].as<String>().length() < 1) {
                request->send(400, "text/plain", "Bad Request");
                return;
            }

            LOG(Debug, "SETUP");

            PreferencesMemory.putString("Language", jsonObj["Language"].as<String>());
            PreferencesMemory.putString("Method", jsonObj["ConnectionMethod"].as<String>());
            PreferencesMemory.putString("SSID", jsonObj["SSID"].as<String>());
            PreferencesMemory.putString("Password", jsonObj["Password"].as<String>());
            request->send(200, "text/plain", "OK");
            PreferencesMemory.putBool("FirstStart", false);

            ESP.restart();
        });
    
    public:
        void begin(bool isFirstStart) {
            server.onNotFound(notFound);

            server.on("/wifi/scan", HTTP_GET, wifiScan);
            server.addHandler(wifiConnectHandle);
            if (isFirstStart) {
                server.addHandler(setupHandle);
                LOG(Debug, "Setup handle added.");
            }

            if (!isFirstStart) {
                server.addHandler(servoHandle);
                LOG(Debug, "Servo handle added.");
            }

            server.on("/", HTTP_GET, [](AsyncWebServerRequest *request) {request->send(SPIFFS, "/index.html", "text/html");});
            server.on("/index.js", HTTP_GET, [isFirstStart](AsyncWebServerRequest *request) {
                if (isFirstStart) request->send(SPIFFS, "/firststart.js", "text/javascript");
                else request->send(SPIFFS, "/index.js", "text/javascript");
            });

            server.on("/get/language", HTTP_GET, getLanguage);

            //FILES
            server.on("/jquery.min.js", HTTP_GET, [](AsyncWebServerRequest *request) {request->send(SPIFFS, "/jquery.min.js", "text/javascript");});
            server.on("/language.js", HTTP_GET, [](AsyncWebServerRequest *request) {request->send(SPIFFS, "/language.js", "text/javascript");});
            server.on("/languages.json", HTTP_GET, [](AsyncWebServerRequest *request) {request->send(SPIFFS, "/languages.json", "text/json");});
            server.on("/tailwind.config.js", HTTP_GET, [](AsyncWebServerRequest *request) {request->send(SPIFFS, "/tailwind.config.js", "text/javascript");});
            server.on("/tailwind.js", HTTP_GET, [](AsyncWebServerRequest *request) {request->send(SPIFFS, "/tailwind.js", "text/javascript");});
            server.on("/favicon.svg", HTTP_GET, [](AsyncWebServerRequest *request) {request->send(SPIFFS, "/favicon.svg", "image/svg+xml");});

            delay(1000);
            server.begin();
        };
};

extern Server_Class Server;

#endif  // SERVER_H