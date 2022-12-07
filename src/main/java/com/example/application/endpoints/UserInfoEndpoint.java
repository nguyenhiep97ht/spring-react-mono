package com.example.application.endpoints;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.transaction.annotation.Transactional;
import com.example.application.service.UserServiceImpl;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import lombok.RequiredArgsConstructor;

/**
 * An endpoint that counts numbers.
 */
@Endpoint
@AnonymousAllowed
@Transactional
@RequiredArgsConstructor
public class UserInfoEndpoint {


    private final UserServiceImpl userService;

    public UserDetails getUserInfo(String username) {
        return userService.loadUserByUsername(username);
    }
}