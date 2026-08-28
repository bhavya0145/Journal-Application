package com.example.journalApplication.controllers;

import com.example.journalApplication.entity.User;
import com.example.journalApplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("admin")
public class adminController {
    @Autowired
    UserService UserService;
    @GetMapping("allUsers")
    public ResponseEntity<?> getAllUsers(){
        List<User> all= UserService.getAll();
        if(all!=null && !all.isEmpty()){
            return new ResponseEntity<>(all, HttpStatus.OK);
        }
        return null;
    }

}
