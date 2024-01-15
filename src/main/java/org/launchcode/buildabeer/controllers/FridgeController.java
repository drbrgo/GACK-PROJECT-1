package org.launchcode.buildabeer.controllers;

import org.launchcode.buildabeer.data.BeerRepository;
import org.launchcode.buildabeer.data.FridgeRepository;
import org.launchcode.buildabeer.data.UserRepository;
import org.launchcode.buildabeer.models.Beer;
import org.launchcode.buildabeer.models.Fridge;
import org.launchcode.buildabeer.models.dto.BeerDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
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

//    @CrossOrigin(origins = "http://localhost:3000")
//    @GetMapping
//    public String displayUserFridge(Model model, @PathVariable int fridgeId){
//        Optional optFridge = fridgeRepository.findById(fridgeId);
//        if (optFridge.isPresent()) {
//        Fridge fridge = (Fridge) optFridge.get();
//        model.addAttribute("fridge", fridge);
//        return "fridge";
//        }
//        else {
//            return "redirect:../";
//        }
//    }

    @CrossOrigin
    @GetMapping("/getBeers")
    public ResponseEntity<?> getBeerObjects() {
        return new ResponseEntity<>(beerRepository.findAll(), HttpStatus.OK);
    }


    @CrossOrigin
    @GetMapping("/getBeers/{username}")
    public ResponseEntity<?> getBeerObjectsByUsername(@PathVariable String username){

    Optional<Beer> getBeerObjectsByUsername = fridgeRepository.findBeersByUsername(username);
    if (getBeerObjectsByUsername.isPresent()){

        }
    }

    @CrossOrigin
    @DeleteMapping("/removeBeer/{id}")
    public ResponseEntity<?> removeBeer(@PathVariable int id){
        Optional<Beer> removeBeer = beerRepository.findById(id);

        if(removeBeer.isPresent()){
            beerRepository.delete(removeBeer.get());
        }
        return new ResponseEntity<>(beerRepository.findAll(), HttpStatus.OK);
    }

    @PutMapping("/updateBeer/{id}")
    public ResponseEntity<?> updateBeer(@PathVariable int id, @RequestBody BeerDTO beerDTO){

        Optional<Beer> updateBeer = beerRepository.findById(id);

        if (updateBeer.isPresent()) {
            updateBeer.get().setName(beerDTO.getName());
            updateBeer.get().setAbv(beerDTO.getAbv());
            updateBeer.get().setTastingNotes(beerDTO.getTastingNotes());
            beerRepository.save(updateBeer.get());
        }

        return new ResponseEntity<>(beerRepository.findAll(), HttpStatus.OK);
    }
}
