package com.br.book_review_backend.Controller;

import com.br.book_review_backend.Repo.UserRepo;
import com.br.book_review_backend.Service.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;


import com.br.book_review_backend.Dto.userEntity;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private CustomUserDetailsService CustomUserDetailsService;

    @GetMapping
    public ResponseEntity<userEntity> getUser(@AuthenticationPrincipal UserDetails userDetails) {
        String username = userDetails.getUsername();
        userEntity user = userRepo.findByUsername(username).orElse(null);

        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<userEntity> registerUser(@RequestBody userEntity user) {
        userEntity newUser = CustomUserDetailsService.saveUser(user.getUsername(), user.getPassword(), user.getName(), user.getAvatar());
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }


}
