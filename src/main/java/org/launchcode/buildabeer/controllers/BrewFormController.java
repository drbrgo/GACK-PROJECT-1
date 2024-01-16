package org.launchcode.buildabeer.controllers;

import org.launchcode.buildabeer.data.BeerRepository;
import org.launchcode.buildabeer.data.FridgeRepository;
import org.launchcode.buildabeer.data.UserRepository;
import org.launchcode.buildabeer.models.Fridge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
@RequestMapping("user/form")

public class BrewFormController {


    @Autowired
    public BrewFormRepository brewFormRepository;


    //Present for database operations
    @Autowired
    public FridgeRepository fridgeRepository;

    @Autowired
    public UserRepository userRepository;

    @Autowired
    public BeerRepository beerRepository;


    //the GET request pointing to Drew's user cookie extract and display the username in the first input of the form.
    // Work in progress, method/path variable names may change
//    @CrossOrigin
//    @GetMapping("/getCookie")
//    public String displayCookieUser(Model model, @PathVariable String cookie) {
//        return "username";
//    }

    //Method for form submission processing. Requestparam to bind form input values to method params
    //Note: since flavorNotes values are checkbox type, will need to collect it as an array or list. Work in
    // progress, depending on debugging may change flavorNotes to Array string type.
    @PostMapping
    public String processForm(@RequestParam String username, @RequestParam String wolfenstein,
                              @RequestParam String barrelType, @RequestParam List<String> flavorNotes,
                              @RequestParam int basic, @RequestParam String recentPlace,
                              @RequestParam String userComments, Model model) {


        // Major note: Will see if the ID can be generated in MySQL at form submission within a response table with
        // columns for generated ID and of the rest of the key/value pairs of the response data. Work in progress.


        //method for creating new brewForm instance
        BrewForm brewForm;
        brewForm = new BrewForm();
        brewForm.setUserName(username); //unsure if I would set this, my form will auto-populate, since I am
        // retreiving the username/id from the user cookie, but its value is currently set to be collected from the
        // form, thus forming part of the form data object.
        brewForm.setWolfenstein(wolfenstein);
        brewForm.setBarrelType(barrelType);
        brewForm.setFlavorNotes(flavorNotes); //need to troubleshoot both on here and the form as it is a List
        // instead of just a string parameter.
        brewForm.setBasic(basic);
        brewForm.setRecentPlace(recentPlace);
        brewForm.setUserComments(userComments);

        //Save instance to the repository
        brewFormRepository.save(brewForm);



        //Where attributes to the model are added
        model.addAttribute("successMessage", "Form submitted successfully");
        //Not sure if back-end validation logic goes here. Will update. If not, then I will use this to create a
        // "Form submitted successfully" message and animation (not part of mvp, something extra for later).

        //Return view,
        return "redirect:/confirmation-page";

    }
}

