package org.launchcode.buildabeer.controllers;

import org.launchcode.buildabeer.data.UserAdminRepository;
import org.launchcode.buildabeer.models.UserAdmin;
import org.launchcode.buildabeer.models.dto.UserAdminDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/userAdmin")
public class UserAdminController {

    @Autowired
    private UserAdminRepository userAdminRepository;
    @PostMapping("/addNewUser")
    public ResponseEntity<?> addNewUser(@RequestBody UserAdminDTO userAdminDTO) {

        UserAdmin newProfile = new UserAdmin(userAdminDTO.getName(), userAdminDTO.getBirthdate(), userAdminDTO.getPhoneNumber(), userAdminDTO.getEmailAddress(), userAdminDTO.getPassword());
        //set createProfileEntity
        userAdminRepository.save(newProfile);
        return new ResponseEntity<>(userAdminDTO, HttpStatus.OK);
    }
    @GetMapping("/getUsers")
    public ResponseEntity<?> getUserObjects() {
        return new ResponseEntity<>(userAdminRepository.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("/removeProfile/{id}")
    public ResponseEntity<?> removeProfile(@PathVariable Long id) {
        Optional<UserAdmin> removeProfile = userAdminRepository.findById(id);

        if(removeProfile.isPresent()) {
            userAdminRepository.delete(removeProfile.get());
        }
        return new ResponseEntity<>(userAdminRepository.findAll(), HttpStatus.OK);
    }

}

