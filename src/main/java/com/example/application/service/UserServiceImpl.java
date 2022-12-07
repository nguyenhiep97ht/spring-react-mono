package com.example.application.service;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.application.data.User;
import com.example.application.repo.UserRepo;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserDetailsService {

  private final UserRepo userRepo;


  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    
    User user = userRepo.findByUsername(username);
    Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
    authorities.add(new SimpleGrantedAuthority("ADMIN"));
    return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
  }
}
