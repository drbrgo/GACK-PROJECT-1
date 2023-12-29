package org.launchcode.buildabeer.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
@RequestMapping(value = "/admin")
public class UserAdminController {

    @PostMapping("/addNewUser")
    public ResponseEntity<?> addNewUser() {
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
