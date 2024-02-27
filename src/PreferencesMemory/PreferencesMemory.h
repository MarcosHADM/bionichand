#ifndef PREFERENCES_MEMORY_H
#define PREFERENCES_MEMORY_H

#include <Preferences.h>
#include <Arduino.h>

class PreferencesMemory_Class {
    private:
        Preferences preferences;
    public:
        PreferencesMemory_Class() {}

        void begin() {
            preferences.begin("handmotion", false); 
        }

        void clear() {
            preferences.clear();
        }

        void remove(const char *key) {
            preferences.remove(key);
        }

        // PUT
        void putChar(const char *key, int8_t value) { preferences.putChar(key, value); }
        void putUChar(const char *key, uint8_t value) { preferences.putUChar(key, value); }
        void putShort(const char *key, int16_t value) { preferences.putShort(key, value); }
        void putUShort(const char *key, uint16_t value) { preferences.putUShort(key, value); }
        void putInt(const char *key, int32_t value) { preferences.putInt(key, value); }
        void putUInt(const char *key, uint32_t value) { preferences.putUInt(key, value); }
        void putLong(const char *key, int32_t value) { preferences.putLong(key, value); }
        void putULong(const char *key, uint32_t value) { preferences.putULong(key, value); }
        void putLong64(const char *key, int64_t value) { preferences.putLong64(key, value); }
        void putULong64(const char *key, uint64_t value) { preferences.putULong64(key, value); }
        void putFloat(const char *key, float_t value) { preferences.putFloat(key, value); }
        void putDouble(const char *key, double_t value) { preferences.putDouble(key, value); }
        void putBool(const char *key, bool value) { preferences.putBool(key, value); }
        void putString(const char *key, String value) { preferences.putString(key, value); }
        void putBytes(const char *key, const void *value, size_t length) { preferences.putBytes(key, value, length); }

        // GET
        char getChar(const char *key, int8_t defaultValue = (int8_t)0) { return preferences.getChar(key, defaultValue); }
        unsigned char getUChar(const char *key, uint8_t defaultValue = (uint8_t)0U) { return preferences.getUChar(key, defaultValue); }
        short getShort(const char *key, int16_t defaultValue = (int16_t)0) { return preferences.getShort(key, defaultValue); }
        unsigned short getUShort(const char *key, uint16_t defaultValue = (uint16_t)0U) { return preferences.getUShort(key, defaultValue); }
        int getInt(const char *key, int32_t defaultValue = 0) { return preferences.getInt(key, defaultValue); }
        unsigned int getUInt(const char *key, uint32_t defaultValue = 0U) { return preferences.getUInt(key, defaultValue); }
        long getLong(const char *key, int32_t defaultValue = 0) { return preferences.getLong(key, defaultValue); }
        unsigned long getULong(const char *key, uint32_t defaultValue = 0U) { return preferences.getULong(key, defaultValue); }
        long getLong64(const char *key, int64_t defaultValue = 0LL) { return preferences.getLong64(key, defaultValue); }
        unsigned long getULong64(const char *key, uint64_t defaultValue = 0ULL) { return preferences.getULong64(key, defaultValue); }
        float getFloat(const char *key, float_t defaultValue = 0.0) { return preferences.getFloat(key, defaultValue); }
        double getDouble(const char *key, double_t defaultValue = 0.0) { return preferences.getDouble(key, defaultValue); }
        bool getBool(const char *key, bool defaultValue = false) { return preferences.getBool(key, defaultValue); }
        String getString(const char *key, String defaultValue = String()) { return preferences.getString(key, defaultValue); }
        size_t getBytes(const char *key, void *buffer, size_t maxLength) { return preferences.getBytes(key, buffer, maxLength); }
};

extern PreferencesMemory_Class PreferencesMemory;

#endif // EEPROM_MEMORY_H