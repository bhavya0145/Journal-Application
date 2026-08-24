package com.example.journalApplication.controllers;
import com.example.journalApplication.entity.User;
import com.example.journalApplication.entity.journalEntry;
import com.example.journalApplication.repository.journalRepository;
import com.example.journalApplication.service.UserService;
import com.example.journalApplication.service.journalEntryService;
import org.apache.coyote.Response;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.*;

@RestController
@RequestMapping("user")
public class UserController{
    @Autowired
    private UserService UserService;

    @PostMapping
    public void CreateUser(@RequestBody User user){
        UserService.saveEntry(user);
    }
    @PutMapping("{userName}")
    public ResponseEntity<?> UpdateUser(@RequestBody User user, @PathVariable String userName){
        User userInDb = UserService.findByUserName(userName);
        if(userInDb!=null){
            userInDb.setUserName(user.getUserName());
            userInDb.setPassword(user.getPassword());
            UserService.saveEntry(userInDb);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

