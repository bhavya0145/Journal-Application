package com.example.journalApplication.controllers;

import com.example.journalApplication.entity.User;
import com.example.journalApplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/public")
public class PublicController {
    @Autowired
    UserService UserService;
    @PostMapping("/createUser")
    public void CreateUser(@RequestBody User user){
        UserService.saveNewUser(user);
    }

}
