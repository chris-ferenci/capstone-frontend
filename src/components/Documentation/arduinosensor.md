# Hardware Requirements

* 1 ESP32 WiFi Bluetooth 4MB Flash UNO R3 development board
* 1 HC-SR04 ultrasonic distance sensor to measure the height of the plant
* 1 DHT22 sensor module to measure the temperature and humidity of the environment
* 1 Soil Moisture sensor module to measure the soil moisture
* 1 Soil Moisture sensor module to measure the soil moisture
* 1 TEMT6000 light sensor to measure the light intensity
* 1 LED display MATRIX MAX7219 to show current conditions of the plant directly on the monitoring system<
* 1 25 points breadboard
* M-F Dupont Cables
* 1 micro USB cable
* 1 USB charger

Now it's time to start putting things together. Below, you can see the pinouts of all sensors and outputs:

As I had more inputs and outputs than power and ground pins, I also used the 25 points breadboard. I wired it to the vcc pin and gnd pin, so I created 3 extra gnd and vcc pins that I will use for my inputs and outputs.