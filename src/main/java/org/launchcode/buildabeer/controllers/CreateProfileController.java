package org.launchcode.buildabeer.controllers;

import jakarta.servlet.http.HttpServletRequest;
import org.launchcode.buildabeer.data.CreateProfileRepository;
import org.launchcode.buildabeer.models.CreateProfile;
import org.launchcode.buildabeer.models.User;
import org.launchcode.buildabeer.models.dto.CreateProfileDTO;
import org.launchcode.buildabeer.models.dto.DummyRegistrationDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin //Cross-Origin Resource Sharing allows browsers to access different origins securely
@RequestMapping(value = "/createProfile")
public class CreateProfileController {

    @Autowired
    private CreateProfileRepository createProfileRepository;
    //access in our controller to create profile repository
    @PostMapping("/createNewProfile")
    public ResponseEntity<?> createNewProfile(@RequestBody CreateProfileDTO createProfileDTO,
                                                          Errors errors,
                                                          HttpServletRequest request) {

        // Look up user in database using username they provided in the form
        CreateProfile existingUser = createProfileRepository.findByName(createProfileDTO.getName());

        //create password variables for match check
        String password = createProfileDTO.getPassword();
        String verifyPassword = createProfileDTO.getVerifyPassword();

        // Send user back to form if username already exists
        if (existingUser != null) {
            errors.rejectValue("name", "name.alreadyExists", "A user with that username already exists");
            System.out.println("username already in use");
            return ResponseEntity.status(HttpStatus.CONFLICT).body(createProfileDTO);
            //send user back to form if passwords didn't match NOT WORKING!
        } else if (!password.equals(verifyPassword)) {
            errors.rejectValue("password", "passwords.mismatch", "Passwords do not match");
            System.out.println("passwords don't match");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(createProfileDTO);
        } else {

            // OTHERWISE, save new user info and hashed password in database

            CreateProfile newProfile = new CreateProfile(createProfileDTO.getName(), createProfileDTO.getPassword(),
                    createProfileDTO.getBirthdate(), createProfileDTO.getPhoneNumber(), createProfileDTO.getEmailAddress());
            //removed createProfileDTO.getUserId()

            createProfileRepository.save(newProfile);
            return new ResponseEntity<>(createProfileDTO, HttpStatus.OK);
        }
    }

}
