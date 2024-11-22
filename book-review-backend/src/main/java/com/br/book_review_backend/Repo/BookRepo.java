package com.br.book_review_backend.Repo;

import com.br.book_review_backend.Dto.BookEntity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepo extends JpaRepository<BookEntity, Long> {
}
