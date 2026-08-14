package com.example.journalApplication.service;
import com.example.journalApplication.entity.User;
import com.example.journalApplication.entity.journalEntry;
import com.example.journalApplication.repository.journalRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Component
public class journalEntryService {
    @Autowired
    private journalRepository journalRepository;
    @Autowired
    private UserService UserService;
    public void saveEntry(journalEntry journalEntry, String userName) {
        User user = UserService.findByUserName(userName);
        journalEntry.setDate(LocalDateTime.now());
        journalEntry saved = journalRepository.save(journalEntry);
        user.getJournalEntries().add(saved);
        UserService.saveEntry(user);
    }
    public void saveEntry(journalEntry journalEntry) {
        journalRepository.save(journalEntry);
    }
    public List<journalEntry> getAll(){
        return journalRepository.findAll();
    }
    public Optional<journalEntry> findById(ObjectId id){
        return journalRepository.findById(id);
    }
    public void deleteById(ObjectId id, String userName){
        User user = UserService.findByUserName(userName);
        user.getJournalEntries().removeIf(x->x.getId().equals(id));

        journalRepository.deleteById(id);
    }

}
