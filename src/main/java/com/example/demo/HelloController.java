package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class HelloController {
    @GetMapping("/")
    public String index() {
        return ApiQuery.getEndpoint();
        // return "Hai";
    }
}
