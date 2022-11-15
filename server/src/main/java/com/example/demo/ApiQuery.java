package com.example.demo;

import org.json.JSONObject;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;

public class ApiQuery {
    static HashMap<String, Api> mapper = new HashMap<String, Api>();
    public static void Initialize(){
        mapper.put("weatherapi", new Api("729dee3bce084e579c1192251220811", "http://api.weatherapi.com/v1/forecast.json?key=%s&q=%s,%s"));
        mapper.put("openweatherapi", new Api("82ada96bdd6be5d8a4d0ea1c7e67749e", "https://api.openweathermap.org/data/2.5/weather?appid=%s&lat=%s&lon=%s"));
    }
    public static JSONObject getEndpoint(QueryData req) {
        JSONObject response = new JSONObject();
        RestTemplate request = new RestTemplate();
        // Iterate over mapper keys and use the string value from it to construct all the requests
        for (String key : mapper.keySet()) {
            String url = String.format(mapper.get(key).getApiUrl(),mapper.get(key).getApiKey(),req.latitude,req.longitude);
            try {
                response.put(key, new JSONObject(request.getForObject(url, String.class)));
            }
            catch(Exception e){
                response.put(key, new JSONObject("Something went wrong!"));
            }
        }
        return response;
    }
}