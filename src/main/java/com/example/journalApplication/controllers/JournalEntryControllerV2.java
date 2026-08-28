package com.example.journalApplication.controllers;
import com.example.journalApplication.entity.User;
import com.example.journalApplication.entity.journalEntry;
import com.example.journalApplication.service.UserService;
import com.example.journalApplication.service.journalEntryService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@RestController
    @RequestMapping("journal")
    public class JournalEntryControllerV2 {
        @Autowired
        private journalEntryService journalEntryService;
        @Autowired
        private UserService UserService;

        //Map<String, journalEntry> journalEntries = new HashMap<>();
        @GetMapping
        public ResponseEntity<?> getAllJournalEntriesOfUser(){
            Authentication Authentication = SecurityContextHolder.getContext().getAuthentication();
            String userName = Authentication.getName();
            User user = UserService.findByUserName(userName);
            List<journalEntry> all = user.getJournalEntries();
            if(all!=null && !all.isEmpty()){
                return new ResponseEntity<>( all,HttpStatus.OK);
            }
            return new ResponseEntity<>( HttpStatus.NOT_FOUND);

        }

        @PostMapping
        public ResponseEntity<journalEntry> createEntry(@RequestBody journalEntry newEntry){

            try{
                Authentication Authentication = SecurityContextHolder.getContext().getAuthentication();
                String userName = Authentication.getName();
                newEntry.setDate(LocalDateTime.now());
                journalEntryService.saveEntry(newEntry,userName);
                return new ResponseEntity<>( HttpStatus.CREATED);
            }catch(Exception e){
                e.printStackTrace();
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        }
        @GetMapping("id/{myId}")
        public ResponseEntity<journalEntry> getById(@PathVariable ObjectId myId){
            Authentication Authentication = SecurityContextHolder.getContext().getAuthentication();
            String userName = Authentication.getName();
            User user = UserService.findByUserName(userName);
            boolean belongToUser = user.getJournalEntries().stream()
                    .anyMatch(x -> x.getId().equals(myId));
            if(belongToUser){
                Optional <journalEntry> journalEntry = journalEntryService.findById(myId);
                if(journalEntry.isPresent()) return new ResponseEntity<>(journalEntry.get(), HttpStatus.OK);

            }
            return new ResponseEntity<>( HttpStatus.NOT_FOUND);
        }
        @DeleteMapping("id/{myId}")
        public ResponseEntity<?> deleteEntry(@PathVariable ObjectId myId){
            Authentication Authentication = SecurityContextHolder.getContext().getAuthentication();
            String userName = Authentication.getName();
            boolean removed = journalEntryService.deleteById(myId,userName);
            if(removed) return new ResponseEntity<>( HttpStatus.NO_CONTENT);
            else return new ResponseEntity<>( HttpStatus.NOT_FOUND);
        }
        @PutMapping("id/{myId}")
        public ResponseEntity<?> updateJournal(@PathVariable ObjectId myId,
                                               @RequestBody journalEntry newEntry){
            Authentication Authentication = SecurityContextHolder.getContext().getAuthentication();
            String userName = Authentication.getName();
            User user = UserService.findByUserName(userName);
            boolean belongToUser = user.getJournalEntries().stream()
                    .anyMatch(x -> x.getId().equals(myId));
            if(belongToUser){
                Optional <journalEntry> journalEntry = journalEntryService.findById(myId);
                if(journalEntry.isPresent()){
                    journalEntry old = journalEntry.get();
                    old.setTitle(newEntry.getTitle() != null && !newEntry.getTitle().equals("") ? newEntry.getTitle():
                            old.getTitle());
                    old.setContent(newEntry.getContent() != null && !newEntry.getContent().equals("") ?
                            newEntry.getContent(): old.getContent());
                    journalEntryService.saveEntry(old);
                    return new ResponseEntity<>(old,HttpStatus.OK);
                }
            }
            newEntry.setDate(LocalDateTime.now());
            return new ResponseEntity<>( HttpStatus.NOT_FOUND);
        }
    }

