package com.example.demo;

import org.json.JSONObject;

public class QueryData {

    // Creating an object of ArrayList
    static JSONObject Data
            = new JSONObject();
    Float longitude;
    Float latitude;
    String location;
    QueryData(Float longitude, Float latitude, String location)
    {
        // This keyword refers to parent instance itself
        this.longitude = longitude;
        this.latitude = latitude;
        this.location = location;
    }
}