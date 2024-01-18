package org.launchcode.buildabeer.controllers;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.launchcode.buildabeer.data.RegisterDummyRepository;
import org.launchcode.buildabeer.data.UserRepository;
import org.launchcode.buildabeer.models.RegisterDummy;
import org.launchcode.buildabeer.models.User;
import org.launchcode.buildabeer.models.dto.DummyRegistrationDTO;
import org.launchcode.buildabeer.models.dto.LoginDTO;
import org.launchcode.buildabeer.models.dto.RegisterDummyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

//start fresh to test using different registerdummyrepostiory and registerdummydto -- works just fine

/*@Controller
@CrossOrigin
//@RequestMapping(value = "/registerdummy")
public class AuthenticationController {

    //access our repository
    @Autowired
    RegisterDummyRepository registerDummyRepository;

    @PostMapping ("/registerdummy")
    public ResponseEntity<?> registerDummy (@RequestBody RegisterDummyDTO registerDummyDTO) {

        //build a model with data from dto
        RegisterDummy newUser = new RegisterDummy(registerDummyDTO.getUsername(), registerDummyDTO.getPassword());

        //add new data as entry in repository
        registerDummyRepository.save(newUser);

        return new ResponseEntity<>(registerDummyRepository.findAll(), HttpStatus.OK);

    }

}*/

//now let's start with a simplified version

@Controller
@CrossOrigin
public class AuthenticationController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/registerdummy")
    public ResponseEntity<?> processDummyRegistrationForm(@RequestBody DummyRegistrationDTO dummyRegistrationDTO,
                                                          Errors errors,
                                                          HttpServletRequest request) {


        // Look up user in database using username they provided in the form
        User existingUser = userRepository.findByUsername(dummyRegistrationDTO.getUsername());

        //create password variables for match check
        String password = dummyRegistrationDTO.getPassword();
        String verifyPassword = dummyRegistrationDTO.getVerifyPassword();

        // Send user back to form if username already exists
        if (existingUser != null) {
            errors.rejectValue("username", "username.alreadyExists", "A user with that username already exists");
            System.out.println("username already in use");
            return ResponseEntity.status(HttpStatus.CONFLICT).body(dummyRegistrationDTO);
            //send user back to form if passwords didn't match NOT WORKING!
        } else if (!password.equals(verifyPassword)){
            errors.rejectValue("password", "passwords.mismatch", "Passwords do not match");
            System.out.println("passwords don't match");
             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(dummyRegistrationDTO);
        } else {
            // OTHERWISE, save new username and hashed password in database
            User newUser = new User(dummyRegistrationDTO.getUsername(), dummyRegistrationDTO.getPassword());
            userRepository.save(newUser);

            //without front end, we would set user in a session and redirect to profile page

            return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request){
        request.getSession().invalidate();
        return ResponseEntity.status(HttpStatus.OK).body("logged out");
    }

}







/*@CrossOrigin(origins = "http://localhost:3000/", allowCredentials = "true")
        //(origins = "http://localhost:3000/registerdummy", allowCredentials = "true")
@RestController
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

    @GetMapping("/registerdummy")
    public String displayDummyRegistrationForm(Model model, HttpSession session) {
        model.addAttribute(new DummyRegistrationDTO());
        model.addAttribute("loggedIn", session.getAttribute("user") != null);
        return "register";
    }

    @PostMapping("/registerdummy")
    public ResponseEntity<?> processDummyRegistrationForm(@ModelAttribute @Valid DummyRegistrationDTO dummyRegistrationDTO,
                                          Errors errors,
                                          HttpServletRequest request) {

        System.out.println("DTO received from frontend: " + dummyRegistrationDTO);


        //Send user back to form if errors are found
        if (errors.hasErrors()) {
            System.out.println("errors has errors");
            ResponseEntity.status(HttpStatus.BAD_REQUEST).body("general errors");
        }

            // Look up user in database using username they provided in the form
            User existingUser = userRepository.findByUsername(dummyRegistrationDTO.getUsername());

            // Send user back to form if username already exists
            if (existingUser != null) {
                errors.rejectValue("username", "username.alreadyExists", "A user with that username already exists");
                ResponseEntity.status(HttpStatus.BAD_REQUEST).body("username already in use");
            }

            // Send user back to form if passwords didn't match
            String password = dummyRegistrationDTO.getPassword();
            String verifyPassword = dummyRegistrationDTO.getVerifyPassword();
            if (!password.equals(verifyPassword)) {
                errors.rejectValue("password", "passwords.mismatch", "Passwords do not match");
                HttpHeaders headers = new HttpHeaders();
                headers.add("Error", "Passwords don't match");
                ResponseEntity.status(HttpStatus.BAD_REQUEST).body("passwords don't match");
            }

            // OTHERWISE, save new username and hashed password in database, start a new session, and redirect to home page
            User newUser = new User(dummyRegistrationDTO.getUsername(), dummyRegistrationDTO.getPassword());
            userRepository.save(newUser);
            setUserInSession(request.getSession(), newUser);
            HttpHeaders headers = new HttpHeaders();
            headers.add("Location", "/user/profile");
            return new ResponseEntity<>(headers, HttpStatus.FOUND);
        }


    // handler for logout
    @GetMapping("/logout")
    public String logout(HttpServletRequest request){
        request.getSession().invalidate();
        return "redirect:/login";
    }
}*/
