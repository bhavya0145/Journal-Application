package com.example.journalApplication.repository;

import com.example.journalApplication.entity.journalEntry;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface journalRepository extends MongoRepository<journalEntry, ObjectId> {

}
