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
    private static List<String> newUser = new ArrayList<>();
    @GetMapping //this lives at /register linked from home page
    public String register() {
        return "register";
}
@GetMapping ("register") //this lives at /register will take you directly to form
public String registerForm() {
        return "register";
}
    @PostMapping("register")
    public String registerUser(@RequestParam String registerFirstName, String registerLastName, String birthdate, String phone, String email, String street, String city, String state, String zipCode) {
        newUser.add(registerFirstName); newUser.add(registerLastName); newUser.add(birthdate); newUser.add(phone); newUser.add(email); newUser.add(street); newUser.add(city); newUser.add(state); newUser.add(zipCode);
        return "redirect:"; //user will be redirected to submit confirmation page
}



}


