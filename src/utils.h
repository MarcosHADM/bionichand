#ifndef UTILS_H
#define UTILS_H

#include <Arduino.h>
#include <WiFi.h>

#define longPress 1000

static int getRSSIasQuality(int RSSI) {
    int quality = 0;
    if (RSSI <= -100) {
        quality = 0;
    } else if (RSSI >= -50) {
        quality = 100;
    } else {
        quality = 2 * (RSSI + 100);
    }
    return quality;
}

static String get_wifi_status(int status){
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

enum ButtonStates {NONE, SHORT, LONG, DOWN, STILL};

struct Button {
    byte _pin;
    byte _state = HIGH;
    unsigned long _time;

    public:
        Button(int pin)  {
            _pin = pin;
            pinMode (_pin, INPUT_PULLUP);
            _state = digitalRead (_pin);
        }

        int read() {
            unsigned long now = esp_timer_get_time() / 1000;

            if (now - _time < 50) {
                if (_state == LOW) return (ButtonStates::STILL);
                else return (ButtonStates::NONE);
            }
            
            byte but = digitalRead (_pin);
            byte returnValue;
            
            if (_state != but)  {
                _state = but;
                if (LOW == but) returnValue = ButtonStates::DOWN;
                else returnValue = (now - _time > longPress) ? ButtonStates::LONG : ButtonStates::SHORT;
            
                _time = now;
            } else returnValue = (_state == LOW) ? ButtonStates::STILL : ButtonStates::NONE;

            return returnValue;
        }
};

/*typedef enum {
    WL_NO_SHIELD        = 255,
    WL_IDLE_STATUS      = 0,
    WL_NO_SSID_AVAIL    = 1,
    WL_SCAN_COMPLETED   = 2,
    WL_CONNECTED        = 3,
    WL_CONNECT_FAILED   = 4,
    WL_CONNECTION_LOST  = 5,
    WL_DISCONNECTED     = 6
} wl_status_t;*/

static const char* wl_status_to_string(uint8_t status) {
    switch ((wl_status_t)status) {
        case WL_NO_SHIELD: return "WL_NO_SHIELD";
        case WL_IDLE_STATUS: return "WL_IDLE_STATUS";
        case WL_NO_SSID_AVAIL: return "WL_NO_SSID_AVAIL";
        case WL_SCAN_COMPLETED: return "WL_SCAN_COMPLETED";
        case WL_CONNECTED: return "WL_CONNECTED";
        case WL_CONNECT_FAILED: return "WL_CONNECT_FAILED";
        case WL_CONNECTION_LOST: return "WL_CONNECTION_LOST";
        case WL_DISCONNECTED: return "WL_DISCONNECTED";
        default: return "UNKNOWN_STATUS";
    }
}

#endif  // UTILS_H
