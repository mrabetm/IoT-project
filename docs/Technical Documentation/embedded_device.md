# Embedded device Technical Documentation

## Device description

Describe your device. Don't forget to insert pictures here.

## Code description

Place relevant code snippets here and describe what the code does. No screenshots but code blocks such as:

Code snippet 1:

This code snippet is not final but is relevant for fetching data from the dice api and returning that to the database

```c++
void httpClient(){
  //Intialize variables
  WiFiClient client;
  HTTPClient httpClient;
  DynamicJsonDocument jsonBuffer(1024);
  
  httpClient.begin(client, "http://api.iot.hva-robots.nl/dice/20");
  int httpCode = httpClient.GET();

  //Check whether http request is good
  if(httpCode == HTTP_CODE_OK) { // HTTP_CODE_OK == 200
    String payload = httpClient.getString();
    deserializeJson(jsonBuffer, payload);
    
    int dice = jsonBuffer["data"]["dice"];
    Serial.print("Rolled this number: ");
    Serial.println(dice);

    //check whether a valid number has been rolled
    if(dice > 0){
      String url = "http://localhost:8080/roll";
      String roll = String(dice);

      //Create a post request for the sake of sending data to database
      httpClient.begin(client, url);
      httpClient.addHeader("Content-Type", "Content-Type: application/json");
      int httpResponseCode = httpClient.POST(roll);
      
      //check whether http request 
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
  }
  else{
    Serial.println("Unable to connect :(");
  }
  delay(5000);
}
```

## Wiring diagram

Use [fritzing](https://fritzing.org/) or a schematic editor to create a readable wiring diagram.

Readable means:
- No diagonal wires
- Minimize wire crossovers
- Wire colors
  - Black for negative voltage
  - Red for positive voltage
  - Every signal a different color, or at least grouped by functionality
- Annotate parts, add text and values

Possible software:
- [KiCAD](https://www.kicad.org/)
- [EasyEDA](https://easyeda.com/)
- [Fritzing](https://fritzing.org/)
- [Eagle](https://www.autodesk.com/products/eagle/overview) as part of Fusion360



## Bill of Materials
