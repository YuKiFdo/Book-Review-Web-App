package com.br.book_review_backend.Controller;

import org.springframework.web.bind.annotation.*;
import com.br.book_review_backend.Repo.ReviewsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import com.br.book_review_backend.Dto.ReviewsEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.br.book_review_backend.Service.ReviewsService;
import com.br.book_review_backend.Dto.ReviewResponseDto;

import java.util.List;

@RestController
@RequestMapping("/reviews")
@CrossOrigin(origins = "http://localhost:3000")
public class ReviewsController {
    @Autowired
    private ReviewsRepo ReviewsRepo;
    @Autowired
    private ReviewsService ReviewsService;

    @GetMapping
    public ResponseEntity<List<ReviewsEntity>> getReviews() {
        List<ReviewsEntity> reviews = ReviewsRepo.findAll();
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

    @GetMapping("/edit/{id}")
    public ResponseEntity<?> getReviewById(@PathVariable Long id) {
        ReviewsEntity review = ReviewsRepo.findById(id).orElse(null);
        if (review == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        ReviewResponseDto responseDto = new ReviewResponseDto(
                review.getId(),
                review.getAuthor(),
                review.getTitle(),
                review.getContent(),
                review.getRating(),
                review.getDateAdded(),
                review.getBook() != null ? review.getBook().getId() : null 
        );

        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }


    @GetMapping("/{bookId}")
    public ResponseEntity<List<ReviewsEntity>> getReviewsByBookId(@PathVariable Long bookId) {
        List<ReviewsEntity> reviews = ReviewsService.getReviewsByBookId(bookId);
        if (reviews.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ReviewsEntity> createReview(@RequestBody ReviewsEntity review) {
        ReviewsEntity newReview = ReviewsRepo.save(review);
        return new ResponseEntity<>(newReview, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ReviewsEntity> updateReview(@PathVariable Long id, @RequestBody ReviewsEntity review) {
        ReviewsEntity updatedReview = ReviewsRepo.save(review);
        return new ResponseEntity<>(updatedReview, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteReview(@PathVariable Long id) {
        ReviewsRepo.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
