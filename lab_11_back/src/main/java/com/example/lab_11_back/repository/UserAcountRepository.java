package com.example.lab_11_back.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.lab_11_back.classes.UserAccount;

public interface UserAcountRepository extends JpaRepository<UserAccount,Integer>{

    Optional <UserAccount> findUserByUsername(String userName);
    
}
