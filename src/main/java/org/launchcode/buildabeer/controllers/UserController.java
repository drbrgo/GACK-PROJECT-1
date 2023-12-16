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
public class UserController {
    private static final List<String> users = new ArrayList<>();
    @GetMapping ("user") //this lives at /register/user

    public String registerHereForm() {
        return "user";
}
@PostMapping ("user")
public String registerUser(@RequestParam String registerFirstName, String registerLastName, String birthdate, String phone, String email, String street, String city, String state, String zipCode) {
        users.add(registerFirstName); users.add(registerLastName); users.add(birthdate); users.add(phone); users.add(email); users.add(street); users.add(city); users.add(state); users.add(zipCode);

        //the if else statement is still not working properly
        if (users.isEmpty()) {
        System.out.println("All fields are required!");
        return "redirect:";
        } else {
        return "redirect:/submit"; //user will be redirected to submit confirmation page

    }

}

}
