#ifndef WIFI_H
#define WIFI_H

#include <WiFi.h>
#include <ArduinoJson.h>
#include <AsyncJson.h>
#include "soc/rtc_wdt.h"

#include "config.h"
#include "utils.h"
#include "Spiffs/Spiffs.h"

static WiFiCredentials checkConnectResult;

static void CheckConnectAsync(void* parameters) {
    if (checkConnectResult.ssid == "" || checkConnectResult.ssid == NULL || checkConnectResult.password == "" || checkConnectResult.password == NULL) {
        vTaskDelete(NULL);
    } else {
        WiFi.disconnect();
        WiFi.begin(checkConnectResult.ssid.c_str(), checkConnectResult.password.c_str());
        WiFi.waitForConnectResult(CONNECTION_TIMEOUT * 1000000);

        Serial.println("WiFi status: " + get_wifi_status(WiFi.status()));
        if (WiFi.status() == WL_CONNECTED) {
            WiFi.disconnect();
            checkConnectResult.response = "SUCCESS";
        } else {
            WiFi.disconnect();
            checkConnectResult.response = "ERROR";
        }
    }

    vTaskDelete(NULL);
}

class WiFi_Class {
    private:
        IPAddress localIP; 
        IPAddress localGateway;
        //IPAddress subnet(255, 255, 0, 0);
        unsigned long previousMillis = 0;

    public:
        WiFi_Class() {};

        int foundNetwork(const char *ssid) {
            int n = WiFi.scanComplete();
            if (n != -2 && n) {
                for (int i = 0; i < n; i++) {
                    if (WiFi.SSID(i) == ssid) {
                        return i;
                        break;
                    }
                }
            }
            return -1;
        }

        void connect(const char *ssid, const char *passphrase = (const char *)__null, int32_t channel = 0, const uint8_t *bssid = (const uint8_t *)__null, bool connect = true) {
            WiFi.begin(ssid, passphrase, channel, bssid, connect);
        };

        void disconnect() {
            WiFi.disconnect();
        }

        uint8_t status() {
            return WiFi.status();
        };

        bool resultCheckConnect(String ssid, String password) {
            if (checkConnectResult.ssid == ssid && checkConnectResult.password == password) {
                if (checkConnectResult.response == "SUCCESS") {
                    return true;
                } else {
                    return false;
                }
            }
            return false;
        };
        
        void checkConnect(String ssid, String password) {
            checkConnectResult.ssid = ssid;
            checkConnectResult.password = password;
            checkConnectResult.response = "CHECKING";
            
            xTaskCreatePinnedToCore(CheckConnectAsync, "checkConnect", 4096, NULL, 1, NULL, 0);
        };

        bool scan(JsonVariant& jsonObj) {
            int n = WiFi.scanComplete();
            if (n == -2) {
                WiFi.scanNetworks(true);
                return false;
            }
            else if (n == -1) {
                WiFi.scanNetworks(true);
                return false;
            }
            else {
                JsonArray jsonArray = jsonObj.createNestedArray("networks");

                for (int i = 0; i < n; ++i) {
                    JsonObject innerJsonObj = jsonArray.createNestedObject();
                    innerJsonObj["ssid"] = WiFi.SSID(i);
                    innerJsonObj["channel"] = WiFi.channel(i);
                    innerJsonObj["quality"] = getRSSIasQuality(WiFi.RSSI(i));
                    innerJsonObj["rssi"] = WiFi.RSSI(i);
                    innerJsonObj["bssid"] = WiFi.BSSIDstr(i);
                    innerJsonObj["secure"] = WiFi.encryptionType(i);
                    if (WiFi.status() == WL_CONNECTED && WiFi.SSID() == WiFi.SSID(i)) {
                        innerJsonObj["connected"] = true;
                    } else {
                        innerJsonObj["connected"] = false;
                    }
                }
                WiFi.scanDelete();
                if(WiFi.scanComplete() == -2){
                    WiFi.scanNetworks(true);
                }
                return true;
            }
        }

        bool initWiFi() {
            int numNetworks = Spiffs.getNumNetworks();
            if (numNetworks == 0) {
                Serial.println("No Wi-Fi networks configured");
                return false;
            }

            WiFi.mode(WIFI_STA);
            WiFi.disconnect();
            WiFi.scanNetworks(true);
            for (int i = 0; i < numNetworks; i++) {
                WiFiConfig network = Spiffs.getNetwork(i);
                int NetworkFound = foundNetwork(network.ssid);

                if (NetworkFound != -1 && network.ssid != "") {
                    if (WiFi.encryptionType(NetworkFound) != WIFI_AUTH_OPEN && network.password == "") {
                        Serial.println("Network needs password: " + String(network.ssid));
                        continue;
                    }
                    Serial.println("Network found: " + String(network.ssid));
                    WiFi.begin(network.ssid, network.password);
                    Serial.println("Connecting to WiFi...");

                    unsigned long currentMillis = esp_timer_get_time()/1000000;
                    previousMillis = currentMillis;

                    while(WiFi.status() != WL_CONNECTED) {
                        currentMillis = esp_timer_get_time()/1000000;
                        if (currentMillis - previousMillis >= CONNECTION_TIMEOUT) {
                            Serial.println("Failed to connect.");
                            Serial.println("Trying to connect to the next network...");
                            continue;
                        }
                    }

                    Serial.println("Connected to the WiFi network");
                    Serial.print("You can now connect to http://handmotion.local or http://");
                    Serial.println(WiFi.localIP());
                    return true;
                } else {
                    Serial.println("Wi-Fi network not found: " + String(network.ssid));
                    continue;
                }
            }

            return false;
        }
};

extern WiFi_Class Wifi;
#endif //WIFI_H