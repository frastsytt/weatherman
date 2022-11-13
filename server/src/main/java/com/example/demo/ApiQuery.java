package com.example.demo;

import org.json.JSONObject;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;

public class ApiQuery {
    public static JSONObject getEndpoint(QueryData ob) {
        // The idea is to query both apis, combine them as one and send the single object back to the requester
        final String keyone = "729dee3bce084e579c1192251220811";
        final String urione = String.format("http://api.weatherapi.com/v1/forecast.json?key=%s&q=%s,%s", keyone, ob.latitude,ob.longitude);
        final String keytwo = "82ada96bdd6be5d8a4d0ea1c7e67749e";
        final String uritwo = String.format("https://api.openweathermap.org/data/2.5/weather?appid=%s&lat=%s&lon=%s", keytwo, ob.latitude, ob.longitude);
        RestTemplate restTemplate = new RestTemplate();
        String apiResult = restTemplate.getForObject(urione, String.class);
        RestTemplate restTemplatetwo = new RestTemplate();
        String apiResulttwo = restTemplatetwo.getForObject(uritwo, String.class);
        JSONObject root = new JSONObject(apiResult);
        JSONObject root2 = new JSONObject(apiResulttwo);
        JSONObject combined = new JSONObject();
        combined.put("weatherapi", root);
        combined.put("openweatherapi", root2);
        return combined;
    }
}