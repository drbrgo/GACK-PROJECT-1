package org.launchcode.buildabeer.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


//There may be changes to name of variables, classes, methods, etc. as we further harmonize the project

@Controller
@RequestMapping("/buildbeer")
@ResponseBody
public class FormController {
    @GetMapping("buildbeer/form")

    public String displayBuildBeerForm(){
        return "<html>" +
                "<body>" +
                "<form actions='/buildbeer/form' method='POST'>" +
                "<p>Complete the form to generate your beer</p>" +
                "<input type='text' name='beer' />" +
                "<button type='submit'>Click me</button" +
                "</form>" +
                "</body>" +
                "</html>";
    }

    //Testing form submission with Response Body first
    @PostMapping("buildbeer/form")
    public String renderNewBeer(){
        return "<html>" +
                "<body>" +
                "<h3>1 beer coming up!</h3>" +
                "<p>Say hello to your new beer, " + " + generatedBeer + </p>" +
                "<input type='text' name='beer' />" +
                "</body>" +
                "</html>";
    }
}



