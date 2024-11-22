package com.br.book_review_backend.Dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class ReviewResponseDto {
    private Long id;
    private String author;
    private String title;
    private String content;
    private int rating;
    private Long bookId;
    private LocalDateTime dateAdded;

    public ReviewResponseDto(Long id, String author, String title, String content, int rating, LocalDateTime dateAdded, Long bookId) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.content = content;
        this.rating = rating;
        this.dateAdded = dateAdded;
        this.bookId = bookId;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getDateAdded() {
        return dateAdded;
    }

    public void setDateAdded(LocalDateTime dateAdded) {
        this.dateAdded = dateAdded;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public Long getBookId() {
        return bookId;
    }

    public void setBookId(Long bookId) {
        this.bookId = bookId;
    }
}
