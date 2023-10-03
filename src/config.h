#ifndef CONFIG_H
#define CONFIG_H

#define BOOT_BUTTON_PIN 0
#define CONNECTION_TIMEOUT 15
#define LONG_PRESS 1000

#define WIFI_SSID_PATH "/wifi_config.json"
#define MAX_WIFI_NETWORKS 15

#define SERVOMIN    200 // this is the 'minimum' pulse length count (out of 4096)
#define SERVOMAX    600 // this is the 'maximum' pulse length count (out of 4096)
#define SERVO_FREQ  50  // Analog servos run at ~50 Hz updates

static const char* SSID = "RESIDENCIA";
static const char* PASSWORD = "mm251164";
static const char* AP_SSID = "ESP32_AP";
static const char* AP_PASSWORD = "minhasenha123";

#endif  // CONFIG_H