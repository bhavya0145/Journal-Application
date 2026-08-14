package com.example.journalApplication.repository;

import com.example.journalApplication.entity.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface userRepository extends MongoRepository<User, ObjectId> {
    User findByUserName(String userName);
}
