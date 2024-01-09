package org.launchcode.buildabeer.controllers;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.launchcode.buildabeer.models.User;
import org.launchcode.buildabeer.models.dto.LoginDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.launchcode.buildabeer.data.UserRepository;

import java.util.Optional;

@Controller
<<<<<<< HEAD
public class    HomeController {
=======
@CrossOrigin
public class HomeController {
>>>>>>> main
    @Autowired
    private UserRepository userRepository;
    //The block of text from here to the getmapping annotation may need to be moved elsewhere. Carrie's
    //art gallery app has an authentication controller that contains all log-in and account creation stuff.
    //Just sticking this here for now, as my job is to make the landing page, which has login functionality.
    //Once Suburwa gets the user account creation off the ground, I imagine this will change a little bit,
    //as we'll have actual user data to work with.

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


    @GetMapping
    public String displayLoginForm(Model model, HttpSession session) {
        model.addAttribute(new LoginDTO()); // "loginFormDTO" variable implicit
        model.addAttribute("loggedIn", session.getAttribute("user") != null);
        return "home";
    }

    //for use without react frontend
//    @PostMapping
//    public String processLoginForm(@ModelAttribute @Valid LoginDTO loginDTO, Errors errors, HttpServletRequest request) {
//
//        // Send user back to form if errors are found
//        if (errors.hasErrors()) {
//            return "home";
//        }
//
//        // Look up user in database using username they provided in the form
//        User theUser = userRepository.findByUsername(loginDTO.getUsername());
//
//        // Get the password the user supplied in the form
//        String password = loginDTO.getPassword();
//
//        // Send user back to form if username does not exist OR if password hash doesn't match
//        // "Security through obscurity" — don't reveal which one was the problem
//        if (theUser == null || !theUser.isMatchingPassword(password)) {
//            errors.rejectValue(
//                    "password",
//                    "login.invalid",
//                    "You're flagged! Have a glass of water and try again with valid credentials."
//            );
//            return "home";
//        }
//
//        // OTHERWISE, create a new session for the user and take them to the home page
//        setUserInSession(request.getSession(), theUser);
//        return "redirect:/profile";
//    }

    //for use with react front end
    @PostMapping
    public ResponseEntity<?> processLoginForm(@RequestBody LoginDTO loginDTO, Errors errors) {
        //User theUser = new User (loginDTO.getUsername(), loginDTO.getPassword());

        //Look up user in database using username they provided in the form
        User theUser = userRepository.findByUsername(loginDTO.getUsername());

        // Get the password the user supplied in the form
        String password = loginDTO.getPassword();

        // Send user back to form if username does not exist OR if password hash doesn't match
        if (theUser == null || !theUser.isMatchingPassword(password)) {
            errors.rejectValue(
                    "password",
                    "login.invalid",
                    "You're flagged! Have a glass of water and try again with valid credentials."
            );
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
            return new ResponseEntity<>(loginDTO, HttpStatus.OK);
        }

    }
