package com.example.Pentlux_Restaurant_System.service;

import org.springframework.http.ResponseEntity;

import java.util.Map;

public interface UserService{
    ResponseEntity<String> signUp(Map<String, String> requestMap);

    ResponseEntity<String> login(Map<String, String> requestMap);
}
