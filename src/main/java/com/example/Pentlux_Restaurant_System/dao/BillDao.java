package com.example.Pentlux_Restaurant_System.dao;

import com.example.Pentlux_Restaurant_System.POJO.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BillDao extends JpaRepository<Bill, Integer> {
    List<Bill> getBills();

    List<Bill> getBillByUsername(@Param("username") String username);
}
