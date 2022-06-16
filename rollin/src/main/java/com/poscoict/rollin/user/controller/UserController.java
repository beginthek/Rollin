package com.poscoict.rollin.user.controller;


import com.poscoict.rollin.user.model.UserDto;
import com.poscoict.rollin.user.service.UserService;
import com.poscoict.rollin.user.service.UserServiceimpl;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {


    @Autowired
    UserServiceimpl userService;

    @GetMapping
    public List<UserDto> getUser() {
        return userService.getAllUser();
    }

    @PostMapping
    public Integer insert(@RequestBody UserDto userDTO){
        return userService.insertUser(userDTO);
    }

    @PostMapping("/login")
    public UserDto loginUser(@RequestBody UserDto userDto){
        System.out.println(userDto.toString());
        UserDto returnDto =userService.serviceLogin(userDto);
        System.out.println(returnDto.toString());
        return returnDto;

    }


}
