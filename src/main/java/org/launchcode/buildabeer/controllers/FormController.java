package org.launchcode.buildabeer.controllers;


import org.launchcode.buildabeer.models.Beer;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


//There may be changes to name of variables, classes, methods, etc. as we further harmonize the project

//@Controller
//@RequestMapping
//
//public class FormController {
//    @GetMapping
//    public String displayBuildBeerForm(){
//        return "buildBeerForm";
//    }
//    //@PostMapping
//    //public String renderNewBeer(@RequestParam String ???, @RequestParam String ???, Model model){
//        //Beer newBeer = new Beer(beerID?, ???);
//        //newBeer.setNewBeer(beerID);
//    //model.addAttribute("beer", newBeer);
//        return "newBeer" // or beerID object ?
//    }
//}

//I think the model would be the Beer because a new Beer class object(beerID, etc) would be created upon form submission but not sure
// Example of Beer model code:
//
//public class Beer {
//
//    private int beerID;
//    private String beerType; (all variables/fields/methods tbd)
//    private String beerName;
//    private ArrayList<String> setNewBeer = new ArrayList<>();
//
//    public Beer(int beerID, String beerType, String beerName){
//        this.beerType = beerType;
//        this.beerName = beerName;
//
//        Getters and setters would go here
//    }
//}
