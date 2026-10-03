package com.example.journalApplication.controllers;

import com.example.journalApplication.entity.User;
import com.example.journalApplication.service.UserService;
import com.example.journalApplication.service.customUserDetailServiceImpl;
import com.example.journalApplication.utils.JwtUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequestMapping("/public")
public class PublicController {

    @Autowired
    UserService UserService;
    @Autowired
    customUserDetailServiceImpl userDetailService;
    @Autowired
    private JwtUtils jwtUtil;
    @Autowired
    AuthenticationManager authenticationManager;
    @PostMapping("/createUser")
    public void CreateUser(@RequestBody User user){
        UserService.saveNewUser(user);
    }
    @PostMapping("/login")
    public ResponseEntity<?> LoginUser(@RequestBody User user){
        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUserName(),user.getPassword()));
            UserDetails userDetails = userDetailService.loadUserByUsername(user.getUserName());
            String jwt = jwtUtil.generateToken(userDetails.getUsername());
            return new ResponseEntity<>(jwt, HttpStatus.OK);

        }catch(Exception e){
            log.error("Exception occured",e);
            return new ResponseEntity<>("Incorrect usename or password",HttpStatus.BAD_REQUEST);
        }
    }

}
