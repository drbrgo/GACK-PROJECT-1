package org.launchcode.buildabeer.controllers.api;


//There may be changes to name of variables, classes, methods, etc. as we further harmonize the project

import org.launchcode.buildabeer.data.BeerRepository;
import org.launchcode.buildabeer.data.BrewFormRepository;
import org.launchcode.buildabeer.data.FridgeRepository;
import org.launchcode.buildabeer.data.UserRepository;
import org.launchcode.buildabeer.models.BrewForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("routeform")//Will want to update route/view names later to make more sense to others.
public class BrewFormController {


    //Present for database operations
    @Autowired
    BrewFormRepository brewFormRepository;

    //the GET request pointing to Drew's user cookie extract and display the username in the first input of the form. Work in progress, method/path variable names may change
    @GetMapping
    public String displayCookieUser(Model model, @PathVariable String cookie) {
        return "username";
    }

    //Method for form submission processing. Requestparam to bind form input values to method params
    //Note: since flavorNotes values are checkbox type, will need to collect it as an array or list. Work in progress, depending on debugging may change flavorNotes to Array string type.
    @PostMapping
    public String processForm(@RequestParam String username, @RequestParam String wolfenstein, @RequestParam String barrelType, @RequestParam List<String> flavorNotes, @RequestParam int basic, @RequestParam String recentPlace, @RequestParam String userComments,Model model) {


        // Major note: Will see if the ID can be generated in MySQL at form submission within a response table with columns for generated ID and of the rest of the key/value pairs of the response data. Work in progress.


        //For now, method for creating new brewForm instance sans MySQL
        BrewForm brewForm;
        brewForm = new BrewForm();
        brewForm.setUserName(username); //unsure if I would set this, my form will auto-populate, since I am retreiving the username/id from the user cookie, but its value is currently set to be collected from the form, thus forming part of the form data object.
        brewForm.setWolfenstein(wolfenstein);
        brewForm.setBarrelType(barrelType);
        brewForm.setFlavorNotes(flavorNotes); //need to troubleshoot both on here and the form as it is a List instead of just a string parameter.
        brewForm.setBasic(basic);
        brewForm.setRecentPlace(recentPlace);
        brewForm.setUserComments(userComments);

        //Save instance to the repository
        brewFormRepository.save(brewForm);

        //Where attributes to the model are added
        //Not sure if back-end validation logic goes here. Will update. If not, then I will use this to create a "Form submitted successfully" message and animation (not part of mvp, something extra for later).

        //Return view,
        return "redirect:/viewform";;
        }
    }

