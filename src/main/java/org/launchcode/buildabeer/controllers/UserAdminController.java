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

        UserAdmin newProfile = new UserAdmin(userAdminDTO.getId(), userAdminDTO.getName(), userAdminDTO.getBirthdate(), userAdminDTO.getPhoneNumber(), userAdminDTO.getEmailAddress(), userAdminDTO.getPassword());
        //set createProfileEntity
        userAdminRepository.save(newProfile);
        return new ResponseEntity<>(userAdminDTO, HttpStatus.OK);
    }
    @GetMapping("/getUserProfiles")
    public ResponseEntity<?> getUserProfileObjects() {
        return new ResponseEntity<>(userAdminRepository.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("/removeUser/{id}")
    public ResponseEntity<?> removeUser(@PathVariable Long id) {
        Optional<UserAdmin> removeUserProfile = userAdminRepository.findById(id);

        if(removeUserProfile.isPresent()) {
            userAdminRepository.delete(removeUserProfile.get());
        }
        return new ResponseEntity<>(userAdminRepository.findAll(), HttpStatus.OK);
    }

    @PutMapping("updateUser/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody UserAdminDTO userAdminDTO) {

        Optional<UserAdmin> updateUserProfile =userAdminRepository.findById(id);
        if (updateUserProfile.isPresent()) {
            updateUserProfile.get().setName((userAdminDTO.getName()));
            updateUserProfile.get().setPassword((userAdminDTO.getPassword()));
            updateUserProfile.get().setBirthdate((userAdminDTO.getBirthdate()));
            updateUserProfile.get().setPhoneNumber((userAdminDTO.getPhoneNumber()));
            updateUserProfile.get().setEmailAddress((userAdminDTO.getEmailAddress()));
            userAdminRepository.save(updateUserProfile.get());
        }

        return new ResponseEntity<>(userAdminRepository.findAll(), HttpStatus.OK);
    }

}

