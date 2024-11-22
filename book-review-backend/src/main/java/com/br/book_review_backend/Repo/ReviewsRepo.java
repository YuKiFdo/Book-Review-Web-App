package com.br.book_review_backend.Repo;

import com.br.book_review_backend.Dto.ReviewsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.br.book_review_backend.Dto.ReviewsEntity;

import java.util.Optional;


public interface ReviewsRepo extends JpaRepository<ReviewsEntity, Long> {
    List<ReviewsEntity> findByBookId(Long bookId);
}
