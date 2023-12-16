package org.launchcode.buildabeer.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("register")
public class RegisterController {
    private static final List<String> newUsers = new ArrayList<>();
    @GetMapping ("user") //this lives at /register/user

    public String registerHereForm() {
        return "register";
}
@PostMapping ("register")
public String registerUser(@RequestParam String registerFirstName, String registerLastName, String birthdate, String phone, String email, String street, String city, String state, String zipCode) {
        newUsers.add(registerFirstName); newUsers.add(registerLastName); newUsers.add(birthdate); newUsers.add(phone); newUsers.add(email); newUsers.add(street); newUsers.add(city); newUsers.add(state); newUsers.add(zipCode);
        return "redirect:/submit"; //user will be redirected to submit confirmation page

    }

}


