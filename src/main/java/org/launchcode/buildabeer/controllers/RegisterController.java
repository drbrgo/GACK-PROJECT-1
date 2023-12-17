package org.launchcode.buildabeer.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("register")
public class RegisterController {
    private static List<String> newUser = new ArrayList<>();
    @GetMapping //this lives at /register linked from home page
    public String register() {
        return "register";
}
//TODO: user cannot leave fields blank
@GetMapping ("register") //this lives at /register will take you directly to form
    public String displayRegisterForm(@RequestParam String registerFirstName, String registerLastName, String birthdate, String phone, String email, String street, String city, String state, String zipCode) {
        newUser.add(registerFirstName); newUser.add(registerLastName); newUser.add(birthdate); newUser.add(phone); newUser.add(email); newUser.add(street); newUser.add(city); newUser.add(state); newUser.add(zipCode);
        return "register";
    }

    //TODO: information submitted must be stored and confirmation must be sent to user, page updates to reflect successfully registered.
    @PostMapping("register/add")
    public String addRegisterForm (@RequestParam String registerFirstName, String registerLastName, String birthdate, String phone, String email, String street, String city, String state, String zipCode) {
        newUser.add(registerFirstName); newUser.add(registerLastName); newUser.add(birthdate); newUser.add(phone); newUser.add(email); newUser.add(street); newUser.add(city); newUser.add(state); newUser.add(zipCode);
        return "redirect:/submit"; //user will be redirected to submit confirmation page
    }

/*
You have successfully registered. Welcome Beer Enthusiast
*/
/*  @PostMapping()
    public String registerNewUser(@RequestParam String newUser) {
        newUser.put(newUser);
    }*/

}


