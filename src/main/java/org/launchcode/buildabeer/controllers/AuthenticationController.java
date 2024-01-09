package org.launchcode.buildabeer.controllers;

import jakarta.servlet.http.HttpSession;
import org.launchcode.buildabeer.data.UserRepository;
import org.launchcode.buildabeer.models.User;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class AuthenticationController {
    @Autowired
    private UserRepository userRepository;

    // The key to store user IDs
    private static final String userSessionKey = "user";

    // Stores key/value pair with session key and user ID
    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getId());
        System.out.println("session: " + session.getAttribute("user"));
    }

    // Look up user with key
    public User getUserFromSession(HttpSession session) {

        // Get user ID from database using key
        Integer userId = (Integer) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }

        // Get optional back from database
        Optional<User> userOpt = userRepository.findById(userId);

        // Early return with null if user not found
        if (userOpt.isEmpty()) {
            return null;
        }

        // Return user object (unboxed from optional)
        return userOpt.get();
    }
}
