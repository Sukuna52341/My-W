package com.example.Pentlux_Restaurant_System.restImpl;

import com.example.Pentlux_Restaurant_System.constents.RestaurantConstants;
import com.example.Pentlux_Restaurant_System.rest.UserRest;
import com.example.Pentlux_Restaurant_System.service.UserService;
import com.example.Pentlux_Restaurant_System.utils.RestaurantUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class UserRestImpl implements UserRest {

    @Autowired
    UserService userService;

    @Override
    public ResponseEntity<String> signUp(Map<String, String> requestMap) {
        try {
            return userService.signUp(requestMap);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return RestaurantUtils.getResponseEntity(RestaurantConstants.SOMETHING_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
