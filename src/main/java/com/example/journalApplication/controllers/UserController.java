package com.example.journalApplication.controllers;
import com.example.journalApplication.entity.User;
import com.example.journalApplication.repository.userRepository;
import com.example.journalApplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user")
public class UserController{
    @Autowired
    private UserService UserService;
    @Autowired
    private userRepository userRepository;


    @PutMapping
    public ResponseEntity<?> UpdateUser(@RequestBody User user ){
        Authentication Authentication = SecurityContextHolder.getContext().getAuthentication();
        String userName = Authentication.getName();
        User userInDb = UserService.findByUserName(userName);
            userInDb.setUserName(user.getUserName());
            userInDb.setPassword(user.getPassword());
            UserService.saveNewUser(userInDb);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @DeleteMapping
    public  ResponseEntity<?> DeleteUser(){
        Authentication Authentication = SecurityContextHolder.getContext().getAuthentication();
        String userName = Authentication.getName();
        userRepository.deleteByUserName(userName);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

