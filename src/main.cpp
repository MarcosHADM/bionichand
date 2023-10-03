/**
 * @file    main.cpp
 * @brief   This is the main file of the project.
 * @details It contains the implementation of the main functionality.
 * 
 * @author  Marcos Helbert
 * @date    July, 2023
 * @version 1.0
 *
 * @section LICENSE
 *
 * This program is proprietary software; all rights are reserved to the
 * author, Marcos Helbert. Unauthorized copying or distribution of this
 * program, or any portion of it, is strictly prohibited.
 *
 * For more information about licensing, please contact the author at
 * marcoshhelbert@gmail.com.
 */

#include <Arduino.h>
#include "config.h"
#include "utils.h"

#include <Wire.h>
#include <SPI.h>
#include <Adafruit_PWMServoDriver.h>
#include <AsyncTCP.h>
#include <Logger.h>
#include <ESPmDNS.h>
#include <ansi.h>
#include <EEPROM.h>
#include "soc/rtc_wdt.h"

#include "Wifi/Wifi.h"
#include "spiffs/spiffs.h"
#include "server/server.h"

#define EEPROM_SIZE 1
#define FIRSTSTART_EEPROM_ADDR 0x00

void rtc_wdt_protect_off();
void rtc_wdt_disable_protect();



Logger logger(Debug, "{level} [{file}.{function}.{lineno}] {message}");

const char* ssid = "RESIDENCIA";
const char* password = "mm251164";

byte isFirstStart = 0x01;

Button resetButton(0);

void initMDSN() {
    if(!MDNS.begin("handmotion")) {
        Serial.println("Error starting mDNS");
        return;
    }
}
void setup() {
    Serial.begin(115200);
    Spiffs.initSPIFFS();
    
    EEPROM.begin(EEPROM_SIZE);
    isFirstStart = EEPROM.read(FIRSTSTART_EEPROM_ADDR);
    if (isFirstStart == 0x01) {
        Serial.println("First start");
        EEPROM.write(FIRSTSTART_EEPROM_ADDR, 0x01);
        EEPROM.commit();
    } else {
        Serial.println("Not first start");
    }

    if (Wifi.initWiFi()) {
        initMDSN();
    }
    else {
        Serial.println("Failed to connect to WiFi");
        WiFi.softAP("HANDMOTION-DEVICE", "12345678");
        Server.init(isFirstStart);
        initMDSN();
        Serial.print("You can now connect to http://handmotion.local or http://");
        Serial.println(WiFi.softAPIP());
    }



    /*WiFi.mode(WIFI_AP_STA);
    WiFi.disconnect();
    WiFi.begin(ssid, password);
    Serial.println("\nConnecting");

    while(WiFi.status() != WL_CONNECTED){
        Serial.print(".");
        delay(1000);
    }

    Serial.println("\n");

    Serial.print("You can now connect to http://handmotion.local or http://");
    Serial.println(WiFi.localIP());

    initServer();*/
};

void reset() {
    Serial.println("Reset");
};

void factoryReset() {
    Serial.println("Inicial factory reset...");
    EEPROM.write(FIRSTSTART_EEPROM_ADDR, 0x01);
    EEPROM.commit();
    Spiffs.removeFile(WIFI_SSID_PATH);
    delay(1000);
    ESP.restart();
};

void loop() {
    switch (resetButton.read()) {
        case ButtonStates::SHORT: reset(); break;
        case ButtonStates::LONG: factoryReset(); break;
    };
};