package com.example.Pentlux_Restaurant_System.utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class RestaurantUtils {
    private RestaurantUtils(){

    }
    public static ResponseEntity<String> getResponseEntity(String responseMessage, HttpStatus httpStatus){
        return new ResponseEntity<String>("{\"message\":\""+responseMessage+"\"}", httpStatus);
    }
}
