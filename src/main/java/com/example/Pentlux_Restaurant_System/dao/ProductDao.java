package com.example.Pentlux_Restaurant_System.dao;

import com.example.Pentlux_Restaurant_System.POJO.Product;
import com.example.Pentlux_Restaurant_System.wrapper.ProductWrapper;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductDao extends JpaRepository<Product, Integer> {
    List<ProductWrapper> getAllProduct();
}
