package org.launchcode.buildabeer.controllers;

import org.launchcode.buildabeer.data.CreateProfileRepository;
import org.launchcode.buildabeer.models.CreateProfile;
import org.launchcode.buildabeer.models.dto.CreateProfileDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
@CrossOrigin //Cross-Origin Resource Sharing allows browsers to access different origins securely
@RequestMapping(value = "/createProfile")
public class CreateProfileController {

    @Autowired
    private CreateProfileRepository createProfileRepository;
    //access in our controller to create profile repository
    @PostMapping("/createNewProfile")
    public ResponseEntity<?> createNewProfile(@RequestBody CreateProfileDTO createProfileDTO) {

        CreateProfile newProfile = new CreateProfile(createProfileDTO.getFirstName(), createProfileDTO.getLastName(), createProfileDTO.getBirthdate(), createProfileDTO.getPhoneNumber(), createProfileDTO.getEmailAddress(), createProfileDTO.getStreetAddress(), createProfileDTO.getCity(), createProfileDTO.getState(), createProfileDTO.getZipCode());
        //set createProfileEntity
        createProfileRepository.save(newProfile);
        return new ResponseEntity<>(createProfileDTO, HttpStatus.OK);
    }

}
