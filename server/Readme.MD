## Initalizing

This project uses the Maven build automation tool.

Run ```mvn clean install```

## Running the server

Run the server with ```mvn spring-boot:run```

The server is now listening for a POST request on port 6969.

The following fields are used by the API:

* "longitude": float
* "latitude": float
* "location": string
* "date": int 

Currently the server only uses the ```longitude``` and ```latitude``` values, if they are not supplied, the server defaults to 
*    longitude = 24.753574;
*    latitude = 59.436962;