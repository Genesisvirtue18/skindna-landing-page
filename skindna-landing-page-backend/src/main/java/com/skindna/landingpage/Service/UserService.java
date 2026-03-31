package com.skindna.landingpage.Service;

import com.skindna.landingpage.Entity.User;
import com.skindna.landingpage.Repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Create
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    // Read All
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Read One
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    // Update
    public User updateUser(Long id, User userDetails) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setName(userDetails.getName());
                    user.setNumber(userDetails.getNumber());
                    return userRepository.save(user);
                }).orElseThrow(() -> new RuntimeException("User not found"));
    }

    // Delete
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
