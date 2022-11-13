package com.example.demo;

import org.json.JSONObject;

public class QueryData {

    // Creating an object of ArrayList
    static JSONObject Data
            = new JSONObject();
    double longitude;
    double latitude;
    String location;
    Integer date;
    QueryData(Float longitude, Float latitude, String location, Integer date)
    {
        if (longitude != null && latitude != null) {
            this.longitude = longitude;
            this.latitude = latitude;
        }
        // if no values are supplied, set values to display Tallinn
        else {
            this.longitude = 24.753574;
            this.latitude = 59.436962;
        }
        this.location = location;
        this.date = date;
    }
}