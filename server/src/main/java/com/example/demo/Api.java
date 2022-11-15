package com.example.demo;

public class Api {
    // Define the URL and key
    String apiKey;
    String apiUrl;

    // Set up the constructor
    public Api(String newApiKey, String newApiUrl) {
        this.apiKey = newApiKey;
        this.apiUrl = newApiUrl;
    }
    // Methods to return object properties
    public String getApiKey(){
        return this.apiKey;
    }
    public String getApiUrl(){
        return this.apiUrl;
    }
}
