package com.example.Pentlux_Restaurant_System.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@RequestMapping(path = "/dashboard")
public interface DashboardRest {
    @GetMapping("/details")
    public ResponseEntity<Map<String, Object>> getCount();
}
