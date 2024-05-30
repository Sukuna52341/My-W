package com.example.Pentlux_Restaurant_System.dao;

import com.example.Pentlux_Restaurant_System.POJO.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface UserDao extends JpaRepository<User, Integer> {

    User findByEmailId(@Param("email")String email);
}
