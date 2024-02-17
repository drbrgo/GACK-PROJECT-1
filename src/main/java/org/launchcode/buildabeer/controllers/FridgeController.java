package org.launchcode.buildabeer.controllers;

import org.launchcode.buildabeer.data.BeerRepository;
import org.launchcode.buildabeer.data.UserRepository;
import org.launchcode.buildabeer.models.Beer;
import org.launchcode.buildabeer.models.User;
import org.launchcode.buildabeer.models.dto.BeerDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.launchcode.buildabeer.models.dto.LoginDTO;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
@RequestMapping("user/fridge")
public class FridgeController {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BeerRepository beerRepository;



//    @CrossOrigin
//    @GetMapping("/getBeers")
//    public ResponseEntity<?> getBeerObjects() {
//        return new ResponseEntity<>(beerRepository.findAll(), HttpStatus.OK);
//    }

//    @CrossOrigin
//    @GetMapping("/getBeers")
//    public ResponseEntity<?> getBeerObjects() {
//        return new ResponseEntity<>(beerRepository.findAll(), HttpStatus.OK);
//    }



    @CrossOrigin
    @GetMapping("/getBeers/{username}")
    public ResponseEntity<?> getBeerObjectsByUsername(@PathVariable String username){
        return new ResponseEntity<>(beerRepository.findByUsername(username), HttpStatus.OK);

    }

    @CrossOrigin
    @GetMapping("/getBeers/guest/")
    public ResponseEntity<?> getGuestBeerObjectsByUsername(@RequestParam String username){

        if(beerRepository.findBeersByUsername(username).isEmpty()){
            System.out.println("Your friend, " + username + " has yet to start brewing!");
        }
        System.out.println(beerRepository.findBeersByUsername(username));
        return new ResponseEntity<>(beerRepository.findByUsername(username), HttpStatus.OK);

    }
    @CrossOrigin
    @DeleteMapping("/removeBeer/{id}")
    public ResponseEntity<?> removeBeer(@PathVariable int id, @RequestBody String username ){
        Optional<Beer> removeBeer = beerRepository.findById(id);

        if(removeBeer.isPresent()){
            beerRepository.deleteById(id);
        }
        return new ResponseEntity<>(beerRepository.findBeersByUsername(username), HttpStatus.OK);
    }

    @PutMapping("/updateBeer/{id}")
    public ResponseEntity<?> updateBeer(@PathVariable int id, @RequestBody BeerDTO beerDTO){

        String username = beerDTO.getUsername();
        Optional<Beer> updateBeer = beerRepository.findById(id);

        if (updateBeer.isPresent()) {
            updateBeer.get().setName(beerDTO.getName());
            updateBeer.get().setAbv(beerDTO.getAbv());
            updateBeer.get().setTastingNotes(beerDTO.getTastingNotes());
            updateBeer.get().setFavorite(beerDTO.getFavorite());
            beerRepository.save(updateBeer.get());
        }
//        return new ResponseEntity<>(beerRepository.findAll(), HttpStatus.OK);
        System.out.println(username);
        System.out.println(beerRepository.findBeersByUsername(username));
        return new ResponseEntity<>(beerRepository.findByUsername(username), HttpStatus.OK);
    }
}
