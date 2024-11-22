package com.br.book_review_backend.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.br.book_review_backend.Repo.BookRepo;
import com.br.book_review_backend.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.book_review_backend.Dto.BookEntity;

import java.util.List;

@RestController
@RequestMapping("/book")
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {
    @Autowired
    private BookRepo BookRepo;

    @GetMapping
    public ResponseEntity<List<BookEntity>> getBooks() {
        List<BookEntity> books = BookRepo.findAll();
        return new ResponseEntity<>(books, HttpStatus.OK);
    }
}
