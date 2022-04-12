// My Arduino Simulator Link
// https://www.tinkercad.com/things/kxW4XRHNWPu-11-arduino-platzi

int amarillo = 13;
int rojo = 7;

int milisegundos = 500;

void setup() {
  pinMode(amarillo, OUTPUT);
  pinMode(rojo, OUTPUT);
}

void loop() {
  digitalWrite(amarillo, HIGH);
  digitalWrite(rojo, LOW);
  delay(milisegundos);
  digitalWrite(amarillo, LOW);
  digitalWrite(rojo, HIGH);
  delay(milisegundos);
}
