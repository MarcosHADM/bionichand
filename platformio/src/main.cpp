#include <Arduino.h>
#include <Logger.h>
#include <WiFi.h>
#include <ESPAsyncWebServer.h>
#include <AsyncTCP.h>
#include <SPIFFS.h>

#define CONNECTION_TIMEOUT 10

Logger logger(Debug, "{level} [{file}.{function}.{lineno}] {message}"); // Cria uma instância do logger com nível de log Info

const char* ssid = "RESIDENCIA";
const char* password = "mm251164";
const char* ap_ssid = "Esp32_AP";
const char* ap_password = "minhasenha123";

IPAddress local_ip(192,168,1,1);
IPAddress gateway(192,168,1,1);
IPAddress subnet(255,255,255,0);

AsyncWebServer server(80);

String get_wifi_status(int status){
    switch(status){
        case WL_IDLE_STATUS:
            return "WL_IDLE_STATUS";
        case WL_SCAN_COMPLETED:
            return "WL_SCAN_COMPLETED";
        case WL_NO_SSID_AVAIL:
            return "WL_NO_SSID_AVAIL";
        case WL_CONNECT_FAILED:
            return "WL_CONNECT_FAILED";
        case WL_CONNECTION_LOST:
            return "WL_CONNECTION_LOST";
        case WL_CONNECTED:
            return "WL_CONNECTED";
        case WL_DISCONNECTED:
            return "WL_DISCONNECTED";
        default:
            return "STATUS_DESCONHECIDO";
    }
}
/*
void handle_OnConnect() {
    LED1status = LOW;
    LED2status = LOW;
    Serial.println("GPIO4 Status: OFF | GPIO5 Status: OFF");
    server.send(200, "text/html", SendHTML(LOW, LOW)); 
}
*/
void setup() {
    Serial.begin(115200);
    delay(1000);
    Serial.println(" ");
    LOG(Info, "Iniciando o ESP32");

    LOG(Info, "Montando SPIFFS");
    if(!SPIFFS.begin()){
        LOG(Error, "Ocorreu um erro ao montar o SPIFFS");
        return;
    }

    LOG(Info, "Tentando se conectar a rede WiFi(%s)", ssid);
    WiFi.begin(ssid, password);

    int counter = 0;
    while (WiFi.status() != WL_CONNECTED && counter < 10) {
        delay(1000);
        int status = WiFi.status();
        LOG(Debug, "Status: %s", get_wifi_status(status).c_str());
        counter++;
    }

    if (WiFi.status() != WL_CONNECTED) {
        LOG(Info, "Não foi possível conectar ao WiFi, Iniciando ponto de acesso");
        WiFi.softAPConfig(local_ip, gateway, subnet);
        WiFi.softAP(ap_ssid, ap_password);
        delay(100);
        LOG(Info, "\n======= Ponto de acesso iniciado! =======\nSSID: %s \nSENHA: %s\nIP: %s\nGATEWAY: %s \nSUBNET: %s \n=========================================", ap_ssid, ap_password, WiFi.softAPIP().toString().c_str(), WiFi.gatewayIP().toString().c_str(), WiFi.subnetMask().toString().c_str());
    } else {
        LOG(Info, "Conectado ao WiFi com sucesso!");
        LOG(Info, "IP: %s", WiFi.localIP().toString().c_str());
    }

    server.on("/flowbite.min.css", HTTP_GET, [](AsyncWebServerRequest *request) {
        request->send(SPIFFS, "/static/css/flowbite.min.css", "text/css");
    });

    server.on("/flowbite.min.js", HTTP_GET, [](AsyncWebServerRequest *request) {
        request->send(SPIFFS, "/static/js/flowbite.min.js", "text/javascript");
    });
    
    server.on("/flowbite.config.js", HTTP_GET, [](AsyncWebServerRequest *request) {
        request->send(SPIFFS, "/static/js/flowbite.config.js", "text/javascript");
    });

    server.on("/jquery-3.7.0.min.js", HTTP_GET, [](AsyncWebServerRequest *request) {
        request->send(SPIFFS, "/static/js/jquery-3.7.0.min.js", "text/javascript");
    });

    server.on("/toggle-theme.js", HTTP_GET, [](AsyncWebServerRequest *request) {
        request->send(SPIFFS, "/static/js/toggle-theme.js", "text/javascript");
    });

    server.on("/logo.svg", HTTP_GET, [](AsyncWebServerRequest *request) {
        request->send(SPIFFS, "/static/images/bionichand.svg", "image/svg+xml");
    });



    server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
        request->send(SPIFFS, "/index.html", "text/html");
    });

    server.on("/statistics", HTTP_GET, [](AsyncWebServerRequest *request){
        File file = SPIFFS.open("/statistics.html", "r");
        if (!file) {
            request->send(404);
            return;
        }
        String html = file.readString();
        file.close();

        html.replace("{HARDWARE}", "ESP32");
        html.replace("{SDK Version}", ESP.getSdkVersion());
        html.replace("{MAC Address}", WiFi.macAddress());
        html.replace("{Free Heap (SRAM)}", String(ESP.getFreeHeap()));
        html.replace("{WiFi Mode}", String(WiFi.getMode()));
        html.replace("{WiFi Signal}", String(WiFi.RSSI()));
        html.replace("{Statistic 1}", "Value 1");
        html.replace("{Statistic 2}", "Value 2");

        request->send(200, "text/html", html);
    });

    server.on("/settings", HTTP_GET, [](AsyncWebServerRequest *request){
        request->send(SPIFFS, "/settings.html", "text/html");
    });

    server.begin();
    LOG(Info, "Servidor iniciado na porta 80");
}

void loop() {}