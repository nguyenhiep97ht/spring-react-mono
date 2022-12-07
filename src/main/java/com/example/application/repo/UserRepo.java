package com.example.application.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.application.data.User;

public interface UserRepo extends JpaRepository<User, Long> {
  User findByUsername(String username);

  
}

