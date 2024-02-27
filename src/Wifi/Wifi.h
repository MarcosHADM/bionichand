#ifndef WIFI_H
#define WIFI_H

#include <WiFi.h>
#include <ArduinoJson.h>
#include <AsyncJson.h>
#include "soc/rtc_wdt.h"

#include "config.h"
#include "utils.h"
#include "Spiffs/Spiffs.h"
#include "PreferencesMemory/PreferencesMemory.h"

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
            checkConnectResult.response = WIFI_SUCCESS;
        } else {
            WiFi.disconnect();
            checkConnectResult.response = WIFI_ERROR;
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

        bool begin() {
            String ssid = PreferencesMemory.getString("SSID", "");
            String password = PreferencesMemory.getString("Password", "");
            WiFi.scanNetworks();
            WiFi.disconnect();

            if (ssid == "" && password == "") return false;

            WiFi.mode(WIFI_STA);
            WiFi.begin(ssid.c_str(), password.c_str());
            uint8_t status = WiFi.waitForConnectResult(CONNECTION_TIMEOUT * 1000000);

            if (status != WL_CONNECTED) return false;

            return true;
        };

        void softAP(const char *ssid, const char *passphrase = (const char *)__null, int channel = 1, int ssid_hidden = 0, int max_connection = 4, bool ftm_responder = false) {
            WiFi.softAP(ssid, passphrase, channel, ssid_hidden, max_connection, ftm_responder);
            IPAddress apIP(192, 168, 4, 1);
            WiFi.softAPConfig(apIP, apIP, IPAddress(255, 255, 255, 0));
        }

        String getIP() {
            if (WiFi.getMode() == WIFI_STA) return WiFi.localIP().toString();
            else return WiFi.softAPIP().toString();
        }

        bool scan(JsonVariant& jsonObj) {
            int n = WiFi.scanComplete();
            if (n == -2 || n == -1) {
                WiFi.scanNetworks(true);
                return false;
            }

            JsonArray jsonArray = jsonObj.createNestedArray("networks");
            for (int i = 0; i < n; ++i) {
                JsonObject innerJsonObj = jsonArray.createNestedObject();
                innerJsonObj["ssid"] = WiFi.SSID(i);
                innerJsonObj["channel"] = WiFi.channel(i);
                innerJsonObj["quality"] = getRSSIasQuality(WiFi.RSSI(i));
                innerJsonObj["rssi"] = WiFi.RSSI(i);
                innerJsonObj["bssid"] = WiFi.BSSIDstr(i);
                innerJsonObj["secure"] = WiFi.encryptionType(i);
                if (WiFi.status() == WL_CONNECTED && WiFi.SSID() == WiFi.SSID(i)) innerJsonObj["connected"] = true;
                else innerJsonObj["connected"] = false;
            }

            WiFi.scanDelete();
            if(WiFi.scanComplete() == -2){
                WiFi.scanNetworks(true);
            }
            return true;
        }

        void checkConnect(String ssid, String password) {

        };

        wifi_check_status_t resultCheckConnect(String ssid, String password) {
            if (checkConnectResult.ssid == ssid && checkConnectResult.password == password) return checkConnectResult.response;
            return WIFI_ERROR;
        };

        /*void connect(const char *ssid, const char *passphrase = (const char *)__null, int32_t channel = 0, const uint8_t *bssid = (const uint8_t *)__null, bool connect = true) {
            WiFi.begin(ssid, passphrase, channel, bssid, connect);
        };

        void disconnect() {
            WiFi.disconnect();
        }

        uint8_t status() {
            return WiFi.status();
        };

        wifi_check_status_t resultCheckConnect(String ssid, String password) {
            if (checkConnectResult.ssid == ssid && checkConnectResult.password == password) {
                return checkConnectResult.response;
            }
            return WIFI_ERROR;
        };
        
        void checkConnect(String ssid, String password) {
            checkConnectResult.ssid = ssid;
            checkConnectResult.password = password;
            checkConnectResult.response = WIFI_CHECKING;
            
            xTaskCreatePinnedToCore(CheckConnectAsync, "checkConnect", 4096, NULL, 1, NULL, 0);
        };
        */
};

extern WiFi_Class Wifi;
#endif //WIFI_H