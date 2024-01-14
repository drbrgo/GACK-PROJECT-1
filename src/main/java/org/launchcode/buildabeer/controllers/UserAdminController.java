package org.launchcode.buildabeer.controllers;

import org.launchcode.buildabeer.data.UserAdminRepository;
import org.launchcode.buildabeer.models.UserAdmin;
import org.launchcode.buildabeer.models.dto.UserAdminDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
@RequestMapping(value = "/userAdmin")
public class UserAdminController {

    @Autowired
    private UserAdminRepository userAdminRepository;
    @PostMapping("/addNewUser")
    public ResponseEntity<?> addNewUser(@RequestBody UserAdminDTO userAdminDTO) {

        UserAdmin newProfile = new UserAdmin(userAdminDTO.getFirstName(), userAdminDTO.getLastName(), userAdminDTO.getBirthdate(), userAdminDTO.getPhoneNumber(), userAdminDTO.getEmailAddress(), userAdminDTO.getStreetAddress(), userAdminDTO.getCity(), userAdminDTO.getState(), userAdminDTO.getZipCode());
        //set createProfileEntity
        userAdminRepository.save(newProfile);
        return new ResponseEntity<>(userAdminDTO, HttpStatus.OK);
    }

}
