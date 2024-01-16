package org.launchcode.buildabeer.controllers;

import org.launchcode.buildabeer.data.UserAdminRepository;
import org.launchcode.buildabeer.models.UserAdmin;
import org.launchcode.buildabeer.models.dto.UserAdminDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin
@RequestMapping(value = "/userAdmin")
public class UserAdminController {

    @Autowired
    private UserAdminRepository userAdminRepository;
    @PostMapping("/addNewUser")
    public ResponseEntity<?> addNewUser(@RequestBody UserAdminDTO userAdminDTO) {

        UserAdmin newProfile = new UserAdmin(userAdminDTO.getId(), userAdminDTO.getName(), userAdminDTO.getBirthdate(), userAdminDTO.getPhoneNumber(), userAdminDTO.getEmailAddress(), userAdminDTO.getPassword());
        //set createProfileEntity
        userAdminRepository.save(newProfile);
        return new ResponseEntity<>(userAdminDTO, HttpStatus.OK);
    }
    @GetMapping("/getUsers")
    public ResponseEntity<?> getUserObjects() {
        return new ResponseEntity<>(userAdminRepository.findAll(), HttpStatus.OK);
    }

}
