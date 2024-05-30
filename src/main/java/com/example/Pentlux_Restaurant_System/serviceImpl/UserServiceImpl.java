package com.example.Pentlux_Restaurant_System.serviceImpl;

import com.example.Pentlux_Restaurant_System.POJO.User;
import com.example.Pentlux_Restaurant_System.constents.RestaurantConstants;
import com.example.Pentlux_Restaurant_System.dao.UserDao;
import com.example.Pentlux_Restaurant_System.service.UserService;
import com.example.Pentlux_Restaurant_System.utils.RestaurantUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Objects;

@Slf4j
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserDao userDao;

    @Override
    public ResponseEntity<String> signUp(Map<String, String> requestMap) {
        log.info("Inside signup {}", requestMap);
        try {
            if (validateSignUpMap(requestMap)) {
                User user = userDao.findByEmailId(requestMap.get("email"));
                if (Objects.isNull(user)) {
                    userDao.save(getUserFromMap(requestMap));
                    return RestaurantUtils.getResponseEntity("Successfully Signed Up.", HttpStatus.OK);
                } else
                    return RestaurantUtils.getResponseEntity("Email Already Exist.", HttpStatus.BAD_REQUEST);
            } else {
                return RestaurantUtils.getResponseEntity(RestaurantConstants.INVALID_DATA, HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return RestaurantUtils.getResponseEntity(RestaurantConstants.SOMETHING_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    private boolean validateSignUpMap(Map<String, String> requestMap) {
        if (requestMap.containsKey("name") && requestMap.containsKey("mobileNumber")
                && requestMap.containsKey("email") && requestMap.containsKey("password")) {
            return true;
        }
        return false;
    }

    private User getUserFromMap(Map<String, String> requestMap){
        User user = new User();
        user.setName(requestMap.get("name"));
        user.setMobileNumber(requestMap.get("mobileNumber"));
        user.setEmail(requestMap.get("email"));
        user.setPassword(requestMap.get("password"));
        user.setStatus("false");
        user.setRole("user");
        return user;
    }
}
