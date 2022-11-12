package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(value = "/", consumes = "application/json", produces = "application/json")
    public String insert(@RequestBody QueryData ob) {
        return ApiQuery.getEndpoint(ob).toString();
    }
}
