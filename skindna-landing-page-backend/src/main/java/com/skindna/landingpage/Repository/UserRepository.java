package com.skindna.landingpage.Repository;

import com.skindna.landingpage.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}