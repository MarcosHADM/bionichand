#ifndef SERVER_H
#define SERVER_H

#include <ArduinoJson.h>
#include <AsyncJson.h>
#include <ESPAsyncWebServer.h>
#include <SPIFFS.h>

#include "Wifi/Wifi.h"

#include "config.h"
#include "utils.h"

class Server_Class {
    private:
        AsyncWebServer server{80};

        static void WiFiscan(AsyncWebServerRequest *request) {
            AsyncJsonResponse * response = new AsyncJsonResponse();
            JsonVariant& jsonObj = response->getRoot();

            if (!Wifi.scan(jsonObj)) {
                request->send(200, "text/json", "[]");
                return;
            }

            response->setLength();
            request->send(response);
        }

        AsyncCallbackJsonWebHandler* wificonnecthandle = new AsyncCallbackJsonWebHandler("/wifi/connect", [](AsyncWebServerRequest *request, JsonVariant &json) {
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
                bool result = Wifi.resultCheckConnect(jsonObj["ssid"].as<String>(), jsonObj["password"].as<String>());
                if (result) {
                    request->send(200, "text/plain", "OK");
                } else {
                    request->send(401, "text/plain", "WiFi Connect Failed");
                }
            }
            
        });

        static void index(AsyncWebServerRequest *request, byte isFirstStart) {
            /*if (isFirstStart == 0x00) {
                request->send(SPIFFS, "/index.html", "text/html");
            } else {*/
                request->send(SPIFFS, "/index.html", "text/html");
            //}

            request->send(SPIFFS, "/index.html", "text/html");
        }

        static void notFound(AsyncWebServerRequest *request) {
            request->send(404, "application/json", "{\"message\":\"Not found\"}");
        }
    
    public:
        void init(byte isFirstStart) {
            // CORS (somente para testes)
            DefaultHeaders::Instance().addHeader("Access-Control-Allow-Origin", "*");
            DefaultHeaders::Instance().addHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
            DefaultHeaders::Instance().addHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

            server.on("/wifi/scan", HTTP_GET, WiFiscan);
            server.addHandler(wificonnecthandle);

            server.on("/", HTTP_GET, [isFirstStart](AsyncWebServerRequest *request) {index(request, isFirstStart);});
            server.on("/index.js", HTTP_GET, [](AsyncWebServerRequest *request) {request->send(SPIFFS, "/index.js", "text/html");});

            server.onNotFound(notFound);

            //FILES
            server.on("/jquery-3.7.0.min.js", HTTP_GET, [](AsyncWebServerRequest *request) {request->send(SPIFFS, "/jquery-3.7.0.min.js", "text/javascript");});
            server.on("/languages.json", HTTP_GET, [](AsyncWebServerRequest *request) {request->send(SPIFFS, "/languages.json", "text/json");});
            server.on("/tailwind.config.js", HTTP_GET, [](AsyncWebServerRequest *request) {request->send(SPIFFS, "/tailwind.config.js", "text/javascript");});
            server.on("/tailwind.js", HTTP_GET, [](AsyncWebServerRequest *request) {request->send(SPIFFS, "/tailwind.js", "text/javascript");});

            delay(1000);
            server.begin();
        };
};

extern Server_Class Server;

#endif  // SERVER_H