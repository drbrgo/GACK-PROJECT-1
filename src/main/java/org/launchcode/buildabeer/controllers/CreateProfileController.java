package org.launchcode.buildabeer.controllers;

import org.launchcode.buildabeer.models.dto.CreateProfileDTO;
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
    @PostMapping("/createNewProfile")
    public ResponseEntity<?> createNewProfile(@RequestBody CreateProfileDTO createProfileDTO) {
        return new ResponseEntity<>(createProfileDTO, HttpStatus.OK);
    }

}


