package org.launchcode.buildabeer.controllers;

import org.launchcode.buildabeer.data.BeerRepository;
import org.launchcode.buildabeer.data.FridgeRepository;
import org.launchcode.buildabeer.data.UserRepository;
import org.launchcode.buildabeer.models.Fridge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000")
@Controller
@RequestMapping("user/fridge")
public class FridgeController {

    @Autowired
    private FridgeRepository fridgeRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BeerRepository beerRepository;

  //  Could consider making this based on FindByUsername instead of id

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public String displayUserFridge(Model model, @PathVariable int fridgeId){
        Optional optFridge = fridgeRepository.findById(fridgeId);
        if (optFridge.isPresent()) {
        Fridge fridge = (Fridge) optFridge.get();
        model.addAttribute("fridge", fridge);
        return "fridge";
        }
        else {
            return "redirect:../";
        }
    }

    @GetMapping("/getFridge-javaconfig")
    public ResponseEntity<?> getBeerObjects() {
        return new ResponseEntity<>(fridgeRepository.findAll(), HttpStatus.OK);
    }
}
