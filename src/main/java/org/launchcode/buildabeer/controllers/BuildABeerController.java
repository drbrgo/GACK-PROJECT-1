package org.launchcode.buildabeer.controllers;

import jakarta.servlet.http.HttpServletRequest;
import org.launchcode.buildabeer.data.BeerRepository;
import org.launchcode.buildabeer.data.CreateProfileRepository;
import org.launchcode.buildabeer.models.Beer;
import org.launchcode.buildabeer.models.CreateProfile;
import org.launchcode.buildabeer.models.Fridge;
import org.launchcode.buildabeer.models.User;
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

    @Autowired
    private CreateProfileRepository createProfileRepository;

    @PostMapping("/user/buildabeer")
    public ResponseEntity<?> createNewProfile(@RequestBody BeerDTO beerDTO,
                                              Errors errors,
                                              HttpServletRequest request) {

        //get username from beerDTO, then get userId from createprofile repository
        CreateProfile user = createProfileRepository.findByName(beerDTO.getUsername());
        Integer userId = user.getId();

        //build the beer with beerDTO data and userId from createprofile repository
        Beer newBeer = new Beer(beerDTO.getFridge(), beerDTO.getName(), beerDTO.getTastingNotes(), beerDTO.getAbv(), beerDTO.getSetting(),
                beerDTO.getReadingMaterial(), beerDTO.getSockColor(), beerDTO.getListNumber(), beerDTO.getFavorite(), beerDTO.getUsername(), userId);
        beerRepository.save(newBeer);
        return new ResponseEntity<>(beerRepository.findAll(), HttpStatus.OK);

    }

}
