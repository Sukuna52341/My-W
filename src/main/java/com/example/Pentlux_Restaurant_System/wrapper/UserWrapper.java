package com.example.Pentlux_Restaurant_System.wrapper;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserWrapper {
    private Integer id;

    private String name;

    private String email;

    private String mobileNumber;

    private String status;

    public UserWrapper(Integer id, String name, String email, String mobileNumber, String status) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobileNumber = mobileNumber;
        this.status = status;
    }
}
