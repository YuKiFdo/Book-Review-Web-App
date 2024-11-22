package com.br.book_review_backend.Service;

import com.br.book_review_backend.Dto.userEntity;
import com.br.book_review_backend.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.br.book_review_backend.config.SecurityConfig;

import java.util.ArrayList;
import java.util.Optional;


@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("Looking for user: " + username);

        Optional<userEntity> userOpt = userRepo.findByUsername(username);

        if (!userOpt.isPresent()) {
            System.out.println("User not found");
            throw new UsernameNotFoundException("User not found");
        }

        userEntity user = userOpt.get();

        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), new ArrayList<>());
    }

    public userEntity saveUser(String username, String password, String name, String avatar) {
        System.out.println("Creating new user");
        userEntity newUser = new userEntity();
        newUser.setUsername(username);
        newUser.setPassword(passwordEncoder.encode(password));
        newUser.setName(name);
        newUser.setAvatar(avatar);
        System.out.println("Saving user: " + newUser.getUsername());
        return userRepo.save(newUser);
    }
}


