package com.example.Pentlux_Restaurant_System.dao;

import com.example.Pentlux_Restaurant_System.POJO.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryDao extends JpaRepository<Category, Integer> {

    List<Category> getAllCategory();
}
