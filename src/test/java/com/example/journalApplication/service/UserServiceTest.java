package com.example.journalApplication.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class UserServiceTest {
    @Autowired
    UserService UserService;
    @Test
    public void testAdd(){
        assertEquals(2,1+1);
        assertNotNull(UserService.findByUserName("ram"));
    }

}
