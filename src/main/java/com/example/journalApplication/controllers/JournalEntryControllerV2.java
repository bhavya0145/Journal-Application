package com.example.journalApplication.controllers;
import com.example.journalApplication.entity.User;
import com.example.journalApplication.entity.journalEntry;
import com.example.journalApplication.service.UserService;
import com.example.journalApplication.service.journalEntryService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.*;

@RestController
    @RequestMapping("journal")
    public class JournalEntryControllerV2 {
        @Autowired
        private journalEntryService journalEntryService;
        @Autowired
        private UserService UserService;

        //Map<String, journalEntry> journalEntries = new HashMap<>();
        @GetMapping("{userName}")
        public ResponseEntity<?> getAllJournalEntriesOfUser(@PathVariable String userName){
            User user = UserService.findByUserName(userName);
            List<journalEntry> all = user.getJournalEntries();
            if(all!=null && !all.isEmpty()){
                return new ResponseEntity<>( all,HttpStatus.OK);
            }
            return new ResponseEntity<>( HttpStatus.NOT_FOUND);

        }

        @PostMapping("{userName}")
        public ResponseEntity<journalEntry> createEntry(@RequestBody journalEntry newEntry,
                                                        @PathVariable String userName){
            try{

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
            Optional <journalEntry> journalEntry = journalEntryService.findById(myId);
            if(journalEntry.isPresent()) return new ResponseEntity<>(journalEntry.get(), HttpStatus.OK);
            return new ResponseEntity<>( HttpStatus.NOT_FOUND);

        }
        @DeleteMapping("id/{userName}/{myId}")
        public ResponseEntity<?> deleteEntry(@PathVariable ObjectId myId,@PathVariable String userName){
            journalEntryService.deleteById(myId,userName);
            return new ResponseEntity<>( HttpStatus.NO_CONTENT);
        }
        @PutMapping("id/{userName}/{myId}")
        public ResponseEntity<?> updateJournal(@PathVariable ObjectId myId,
                                               @RequestBody journalEntry newEntry,
                                               @PathVariable String userName){
            journalEntry old = journalEntryService.findById(myId).orElse(null);
            if(old!=null){
                old.setTitle(newEntry.getTitle() != null && !newEntry.getTitle().equals("") ? newEntry.getTitle():
                        old.getTitle());
                old.setContent(newEntry.getContent() != null && !newEntry.getContent().equals("") ?
                        newEntry.getContent(): old.getContent());
                journalEntryService.saveEntry(newEntry);
                return new ResponseEntity<>(old,HttpStatus.OK);
            }
            newEntry.setDate(LocalDateTime.now());
            return new ResponseEntity<>( HttpStatus.NOT_FOUND);
        }
    }

