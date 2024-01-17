package org.launchcode.buildabeer.controllers;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.launchcode.buildabeer.models.User;
import org.launchcode.buildabeer.models.dto.LoginDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.launchcode.buildabeer.data.UserRepository;
import java.util.Optional;

@Controller
@CrossOrigin (origins = "http://localhost:3000")

public class HomeController {
    @Autowired
    private UserRepository userRepository;

//for use without react frontend
//    @GetMapping
//    public String displayLoginForm(Model model, HttpSession session) {
//        model.addAttribute(new LoginDTO()); // "loginFormDTO" variable implicit
//        model.addAttribute("loggedIn", session.getAttribute("user") != null);
//        return "home";
//    }


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
    @PostMapping("/")
    public ResponseEntity<?> processLoginForm(@RequestBody LoginDTO loginDTO, Errors errors, HttpSession session) {
        //User theUser = new User (loginDTO.getUsername(), loginDTO.getPassword());

        //Look up user in database using username they provided in the form
        User theUser = userRepository.findByUsername(loginDTO.getUsername());

        // Get the password the user supplied in the form
        String password = loginDTO.getPassword();

        System.out.println(loginDTO.getUsername());

        // Send user back to form if username does not exist OR if password hash doesn't match
        if (theUser == null || !theUser.isMatchingPassword(password)) {
            errors.rejectValue(
                    "password",
                    "login.invalid",
                    "You're flagged! Have a glass of water and try again with valid credentials."
            );
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
            //otherwise, set user in session
            session.setAttribute("user", theUser);
            //System.out.println("your ass should be logged in now, but if it's not, the error is due to session setting" +
                   // "or headers"); it was due to headers -- cannot redirect from backend
            System.out.println(session.getId());


            HttpHeaders headers = new HttpHeaders();
//            headers.add("Set-Cookie", "JSESSIONID=" + session.getId());
            //headers.add("Set-Cookie", "username=" + session.getAttribute(theUser.getUsername()));
            //"; HttpOnly; SameSite=None; Secure
            headers.add("User-ID", theUser.getUsername());


            return new ResponseEntity<>(theUser, HttpStatus.OK);

        //let's try to return a token!
        // generate toekn uncomment the below once spring security is g2g
//        String authToken = generateAuthToken(theUser.getUsername());
//
//        // return token with user id
//        AuthResponse authResponse = new AuthResponse(authToken, theUser.getId());
//        return ResponseEntity.ok(authResponse);
        }

//    @GetMapping("/user/profile")
//    public String displayUserProfileDummyTest(HttpSession session, Model model) {
//        // check if user is in session
//        User user = (User) session.getAttribute("user");
//        if (user != null) {
//            model.addAttribute("user", user);
//            return "dashboard";
//        } else {
//            return "redirect:/login";
//        }
//
//    }
    //use httpheaders to redirect to profile page
            /*HttpHeaders headers = new HttpHeaders();
            headers.add("Location", "/user/profile");
            return new ResponseEntity<>(headers, HttpStatus.FOUND);*/
    //return ResponseEntity.ok().headers(headers).build();


}
