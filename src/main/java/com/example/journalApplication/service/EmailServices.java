package com.example.journalApplication.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServices {
    @Autowired
    JavaMailSender JavaMailSender;

}
