package org.launchcode.buildabeer.controllers;

import jakarta.servlet.http.HttpServletRequest;
import org.launchcode.buildabeer.data.BeerRepository;
import org.launchcode.buildabeer.models.Beer;
import org.launchcode.buildabeer.models.Fridge;
import org.launchcode.buildabeer.models.dto.BeerDTO;
import org.launchcode.buildabeer.models.dto.CreateProfileDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
public class BuildABeerController {

    @Autowired
    private BeerRepository beerRepository;

    @PostMapping("/user/buildabeer")
    public ResponseEntity<?> createNewProfile(@RequestBody BeerDTO beerDTO,
                                              Errors errors,
                                              HttpServletRequest request) {

        Beer newBeer = new Beer(beerDTO.getFridge(), beerDTO.getName(), beerDTO.getTastingNotes(), beerDTO.getAbv(), beerDTO.getSetting(), beerDTO.getReadingMaterial(), beerDTO.getSockColor(), beerDTO.getListNumber(), beerDTO.getFavorite(), beerDTO.getUsername());
        beerRepository.save(newBeer);
        return new ResponseEntity<>(beerRepository.findAll(), HttpStatus.OK);

    }

}
