#ifndef CONFIG_H
#define CONFIG_H

static const byte BOOT_BUTTON_PIN = 0;
static const int CONNECTION_TIMEOUT = 15;
static const int LONG_PRESS = 1000;

static const char* WIFI_SSID_PATH = "/wifi_config.json";
static const int MAX_WIFI_NETWORKS = 15;

static const int SERVOMIN = 200; // this is the 'minimum' pulse length count (out of 4096)
static const int SERVOMAX = 600; // this is the 'maximum' pulse length count (out of 4096)
static const int SERVO_FREQUENCY = 50; // Analog servos run at ~50 Hz updates

#endif  // CONFIG_H