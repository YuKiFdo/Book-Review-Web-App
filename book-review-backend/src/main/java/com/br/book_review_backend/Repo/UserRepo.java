package com.br.book_review_backend.Repo;
import com.br.book_review_backend.Dto.userEntity;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<userEntity, Long> {
    Optional<userEntity> findByUsername(String username);
}
