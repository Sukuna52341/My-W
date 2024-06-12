package com.example.Pentlux_Restaurant_System.service;

import org.springframework.http.ResponseEntity;

import java.util.Map;

public interface DashboardService {
    public ResponseEntity<Map<String, Object>> getCount();
}
