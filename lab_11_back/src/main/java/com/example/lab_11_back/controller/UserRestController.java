package com.example.lab_11_back.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.lab_11_back.classes.UserAccount;
import com.example.lab_11_back.repository.UserAcountRepository;

@RestController
@RequestMapping("/api/user")
public class UserRestController {
    
    @Autowired
    UserAcountRepository userAcountRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping
    public Iterable<UserAccount> getAllUsers(){
        return userAcountRepository.findAll();
    }
   
    @PostMapping
    public UserAccount save(@RequestBody UserAccount userAccount) {
        userAccount.setPassword(passwordEncoder.encode(userAccount.getPassword()));
        return userAcountRepository.saveAndFlush(userAccount);
    }

}
