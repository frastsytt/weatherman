package com.example.demo;

import org.json.JSONObject;
import org.springframework.web.client.RestTemplate;

public class ApiQuery {
    public static JSONObject getEndpoint(QueryData ob) {
        System.out.println(ob.location);
        System.out.println(ob.longitude);
        System.out.println(ob.latitude);
        final String key = "729dee3bce084e579c1192251220811";
        final String uri = String.format("http://api.weatherapi.com/v1/current.json?key=%s&q=%s", key, ob.location);
        RestTemplate restTemplate = new RestTemplate();
        String apiResult = restTemplate.getForObject(uri, String.class);
        System.out.println(apiResult);
        JSONObject root = new JSONObject(apiResult);
        return root;
    }
}