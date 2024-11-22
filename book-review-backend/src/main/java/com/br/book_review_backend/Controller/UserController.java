package com.br.book_review_backend.Controller;

import com.br.book_review_backend.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import com.br.book_review_backend.Dto.userEntity;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserRepo userRepo;

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
    public ResponseEntity<userEntity> saveUser(@RequestBody userEntity user) {
        userEntity newUser = userRepo.save(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

}
