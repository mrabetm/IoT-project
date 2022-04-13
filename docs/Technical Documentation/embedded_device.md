# Embedded device Technical Documentation

## Device description

My device is called the PokeDice, a dice which is I made for my ten-year-old brother

When thinking of a design I considered the following things, I wanted my device to be simple and easy to use for someone at his age.
In order to do this I made my device consist of an LCD screen where I would display the result of the roll and a button which would allow you to navigate through the device.

## Code description

Place relevant code snippets here and describe what the code does. No screenshots but code blocks such as:

Code snippet 1:
```c++
//Method is responsible for posting score to the database
void postRequest(int score){
  //Initialize variables
  WiFiClient client;
  HTTPClient httpClient;
  DynamicJsonDocument jsonBuffer(1024);
  
  Serial.print("HTTP POST begin \n");
  //Begin httppost request by specifying that we are sending json
  httpClient.begin(client, "http://9dd8-2a02-a44a-4963-1-7048-daa7-5462-aad5.ngrok.io/roll");
  httpClient.addHeader("Content-Type", "application/json");

  //Create a string to pass as jsondata in the postrequest
  String payload = "{\"score\":\"" + String(score) + "\",\"roll_date\":\"0\"}";

  int httpResponseCode = httpClient.POST(payload);

  if(httpResponseCode>0){
    String response = httpClient.getString();  //Get the response to the request
    Serial.println(httpResponseCode);   //Print return code
    Serial.println(response);           //Print request answer
  } else {
    Serial.print("Error on sending POST: ");
    Serial.println(httpResponseCode);
    httpClient.end();
  } 
}
```

Code snippet 2:
```c++
//Method is responsible for getting a roll from the hva api
void getRollNumber(){
  //Intialize variables
  WiFiClient client;
  HTTPClient httpClient;
  DynamicJsonDocument jsonBuffer(1024);

  Serial.print("HTTP begin \n");
  httpClient.begin(client, "http://api.iot.hva-robots.nl/dice/6");
  int httpResponseCode = httpClient.GET();

  //Check whether http request is good
  if(httpResponseCode == HTTP_CODE_OK) { // HTTP_CODE_OK == 200
    String payload = httpClient.getString();
    deserializeJson(jsonBuffer, payload);
    //create an int which we pass to postRequest method
    int dice = jsonBuffer["data"]["dice"];
    Serial.print("Rolled this number: ");
    Serial.println(dice);

    postRequest(dice);
  } else {
    //Return error message and stop HTTPclient from running
    Serial.print("Error on sending GET: ");
    Serial.println(httpResponseCode);
    httpClient.end();
  }
}
```
Code snippet 3:
```c++
//method responsible for setting up prerequisite items to make the loop() method function properly
void setup() {
  //Register Button
  pinMode(buttonPin, INPUT);
  pinMode(LED_BUILTIN, OUTPUT);

  //Welcome screen when starting app
  lcd.clear();
  
  lcd.begin();
  lcd.backlight();
  lcd.print("Welcome to");
  lcd.setCursor(0,1);
  lcd.print("PokeDice");

  delay(2000);
  //Welcome screen part 2
  lcd.clear();
  lcd.print("Redirecting to");
  lcd.setCursor(0,1);
  lcd.print("Menu");
  lcd.blink();
  
  delay(2000);
  
  //Begin establishing wifi connection
  Serial.begin(115200);
  WiFi.begin("VRV95174793E9", "3wevVqKDkE4r"); // credentials hva iotroam, Zdc0BLb0r3
  //VRV95174793E9 3wevVqKDkE4r

  // Keep in while-loop while the device is not connected to your accesspoint.
  while (WiFi.status() != WL_CONNECTED) {
    //show this screen while not connected to wifi
    lcd.clear();
    lcd.print("Waiting for");
    lcd.setCursor(0,1);
    lcd.print("connection");
    delay(1000); // Waiting for connection...
  }
}
```

## Wiring diagram

Here are some photos of what my breadboard looked like when finishing all the wiring

![img_6.png](img_6.png)

![img_7.png](img_7.png)



#### Wiring diagram
![img_8.png](img_8.png)


## Bill of Materials

| BILL OF MATERIALS     |                               |              |               |
|-----------------------|-------------------------------|--------------|---------------|
| Item to be created:   |                               | PokeDice     |               |
| Qty to create:        |                               | 1            |               |
|                       |                               |              |               |
| COMPONENT             | DESCRIPTION                   | BASE QTY     | COST PER UNIT |
| Resistor 220Ohm       | Resistor                      | 1            | € 0,05        |
| LCD Display           | 16*2 karakter met witte tekst | 1            | € 4,00        |
| Breadboard 830 points | Breadboard 830                | 1            | € 4,00        |
| Wemos D1 mini V3      | Wemos D1 mini v3              | 1            | € 5,95        |
| breadboard wires      | wires used in breadboard      | 9            | € 2,50        |
| Button sensor         |                               | 1            | € 0,10        |
|                       |                               | TOTAL COST:  | € 36,60       |