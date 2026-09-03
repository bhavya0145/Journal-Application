package com.example.journalApplication.repository;

import com.example.journalApplication.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.util.List;

public class UserRepoImpli {
        @Autowired
        private MongoTemplate MongoTemplate;
        public List<User> getUserForSA(){
            Query query = new Query();
            query.addCriteria(Criteria.where("email").exists(true));
            query.addCriteria(Criteria.where("email").ne(null).ne(""));
            query.addCriteria(Criteria.where("sentimentAnalysis").is(true));
            return MongoTemplate.find(query, User.class);


        }
}
