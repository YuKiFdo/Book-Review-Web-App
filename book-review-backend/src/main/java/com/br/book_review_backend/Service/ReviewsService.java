package com.br.book_review_backend.Service;

import com.br.book_review_backend.Dto.ReviewsEntity;
import com.br.book_review_backend.Repo.ReviewsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewsService {

@Autowired
private ReviewsRepo ReviewsRepo;


public List<ReviewsEntity> getReviewsByBookId(Long bookId) {
    return ReviewsRepo.findByBookId(bookId);
}
}
