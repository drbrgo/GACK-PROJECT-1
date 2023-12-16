package org.launchcode.buildabeer.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("register")
public class UserController {
    @GetMapping ("user") //?
/*    public String registerHere(Model model) {
        List<String> register = new ArrayList<>();
        register.add("Name");
        register.add("email address");
       // register.addAttribute("register", register);
        return "user";

    }*/

public String registerHereForm() {
    return "user";
}

}
