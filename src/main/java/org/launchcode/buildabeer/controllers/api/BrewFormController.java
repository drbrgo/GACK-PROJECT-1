package org.launchcode.buildabeer.controllers.api;


//There may be changes to name of variables, classes, methods, etc. as we further harmonize the project

import org.launchcode.buildabeer.data.BeerRepository;
import org.launchcode.buildabeer.data.BrewFormRepository;
import org.launchcode.buildabeer.data.FridgeRepository;
import org.launchcode.buildabeer.data.UserRepository;
import org.launchcode.buildabeer.models.BrewForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("user/createbeer")//need to double check
public class BrewFormController {

    @Autowired
    BrewFormRepository brewFormRepository;

    @Autowired
    private FridgeRepository fridgeRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BeerRepository beerRepository;

    @GetMapping
    public String displayBrewForm(Model model, @PathVariable String user_id){ //def not sure about this one, ...
        return "user/createbeer";
    }
    @PostMapping
    public String renderNewBeer(@RequestParam String ???, @RequestParam String ???, Model model){
        BrewForm brewForm = new BrewForm()beerID?, ???);
        newBeer.setNewBeer(beerID);
    model.addAttribute("createbeer", createbeer);
        return "redirect:../" // or beerID object ?
    }


