#ifndef SPIFFS_H
#define SPIFFS_H

#include <Arduino.h>
#include <ArduinoJson.h>
#include <SPIFFS.h>
#include <Logger.h>
#include "config.h"
#include "utils.h"

const size_t jsonCapacity = 1024;

struct WiFiConfig {
    char ssid[32];
    char password[64];
};

class Spiffs_Class {
    private: 
        WiFiConfig wifiNetworks[MAX_WIFI_NETWORKS];
        int numNetworks = 0;
    public:
        Spiffs_Class() {};

        bool begin() {
            if (!SPIFFS.begin(true)) {
                LOG(Error, "An error has occurred while mounting SPIFFS");
                return false;
            }

            if (SPIFFS.exists(WIFI_SSID_PATH)) {
                LOG(Info, "Configuration file found. Reading...");
                File configFile = SPIFFS.open(WIFI_SSID_PATH, "r");
                configFile.close();
            } else {
                numNetworks = 0;

                DynamicJsonDocument jsonDocument(jsonCapacity);

                File configFile = SPIFFS.open(WIFI_SSID_PATH, "w");
                if (!configFile) {
                    Serial.println("Failed to open configuration file for writing.");
                    return false;
                }

                serializeJson(jsonDocument, configFile);
                configFile.close();
                Serial.println("Default Wi-Fi network information saved successfully.");
            }

            return true;
        };

        int getNumNetworks() {
            return numNetworks;
        };
        
        void removeFile(const char *path) {
            if (SPIFFS.exists(path)) {
                SPIFFS.remove(path);
                Serial.println("Arquivo removido.");
            } else {
                Serial.println("Arquivo não encontrado.");
            }
        };

        /*bool saveNetwork(String ssid, String password) {
            if (numNetworks)
        }*/

        bool newNetwork(const char *ssid, const char *password) {
            if (numNetworks < MAX_WIFI_NETWORKS) {
                WiFiConfig wifiConfig;
                strcpy(wifiConfig.ssid, ssid);
                strcpy(wifiConfig.password, password);
                wifiNetworks[numNetworks] = wifiConfig;
                numNetworks++;

                DynamicJsonDocument jsonDocument(jsonCapacity);
                JsonArray networkArray = jsonDocument.to<JsonArray>();
                for (int i = 0; i < numNetworks; i++) {
                    JsonObject network = networkArray.createNestedObject();
                    network["ssid"] = wifiNetworks[i].ssid;
                    network["password"] = wifiNetworks[i].password;
                }

                File configFile = SPIFFS.open(WIFI_SSID_PATH, "w");
                if (!configFile) {
                    Serial.println("Failed to open configuration file for writing.");
                    return false;
                }

                serializeJson(jsonDocument, configFile);
                configFile.close();
                return true;
            } else {
                Serial.println("Maximum number of Wi-Fi networks reached.");
                return false;
            }
        };

        WiFiConfig getNetwork(int index) {
            if (index < 0 || index >= numNetworks) {
                Serial.println("Invalid index.");
                return wifiNetworks[0];
            }
            if (numNetworks == 0) {
                Serial.println("No Wi-Fi networks configured.");
                return wifiNetworks[0];
            }
            return wifiNetworks[index];
        };
};

extern Spiffs_Class Spiffs;
#endif //SPIFFS_H