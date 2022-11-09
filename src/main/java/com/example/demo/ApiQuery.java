package com.example.demo;

import org.json.JSONObject;
import org.springframework.web.client.RestTemplate;

public class ApiQuery {
    public static String getEndpoint() {
        final String key = "729dee3bce084e579c1192251220811";
        final String city = "Tallinn";
        final String uri = String.format("http://api.weatherapi.com/v1/current.json?key=%s&q=%s", key, city);
        RestTemplate restTemplate = new RestTemplate();
        String apiResult = restTemplate.getForObject(uri, String.class);
        JSONObject root = new JSONObject(apiResult);
        return root.get("longitude").toString();
    }
}