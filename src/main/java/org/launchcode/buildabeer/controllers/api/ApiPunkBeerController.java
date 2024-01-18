package org.launchcode.buildabeer.controllers.api;


import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.servlet.http.HttpServletRequest;
import org.launchcode.buildabeer.data.BeerRepository;
import org.launchcode.buildabeer.data.UserRepository;
import org.launchcode.buildabeer.models.Beer;
import org.launchcode.buildabeer.models.ProprietaryBeerName;
import org.launchcode.buildabeer.models.User;
import org.launchcode.buildabeer.models.dto.ApiDTO;
import org.launchcode.buildabeer.models.dto.ApiDummyDTO;
import org.launchcode.buildabeer.models.dto.BeerDTO;
import org.launchcode.buildabeer.models.dto.LoginDTO;
import org.launchcode.buildabeer.services.ApiServiceAbv;
import org.launchcode.buildabeer.services.ApiServiceFood;
import org.launchcode.buildabeer.services.ApiServiceRandom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import com.fasterxml.jackson.databind.ObjectMapper;


import java.util.*;
import java.util.stream.Collectors;

//@RestController
@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping(value = "/api")
public class ApiPunkBeerController {

    //@RequestMapping("/{userId}") or something of the like to specify which list of beers we'll be calling to
    //find the most recent one and use its data to make a name


//        @Autowired
//        private RestTemplate restTemplate;

        @Autowired
        private ApiServiceAbv apiServiceAbv;

        @Autowired
        private ApiServiceFood apiServiceFood;

        @Autowired
        private ApiServiceRandom apiServiceRandom;

        @Autowired
        private UserRepository userRepository;

        @Autowired
        private BeerRepository beerRepository;



        //returns all beers at the url
        @GetMapping("/dataf")
        public ResponseEntity<List<ApiDTO>> fetchDataFromExternalAPI() {
            //String apiUrl = "https://api.punkapi.com/v2/beers?abv_gt=3";
            List<ApiDTO> beers = apiServiceFood.getBeers("dog");
            return ResponseEntity.ok(beers);
        }

    //returns beer at specific index
//    @GetMapping("/data")
//    public ResponseEntity<ApiDTO> fetchDataFromExternalAPI() {
//        String apiUrl = "https://api.punkapi.com/v2/beers?abv_lt=3";
//        List<ApiDTO> beers = apiService.getBeers();
//        ApiDTO beer = beers.isEmpty() ? null : beers.get(0);
//        return ResponseEntity.ok(beer);
//    }

    //returns beer by keyword - limited to first page of beers by ABV
      @PostMapping ("/generate")
      public ResponseEntity<?> beerGenerator (@RequestBody ApiDummyDTO apiDummyDTO) {

          //declare variables
          List<ApiDTO> allBeers = apiServiceAbv.getBeers(apiDummyDTO.getAbv());
          String taste = apiDummyDTO.getTaste();
          System.out.println(taste);

          //access api data
          List<ApiDTO> matchingBeers = allBeers.stream()
                  .filter(beer -> beer.getDescription().toLowerCase().contains(taste.toLowerCase()))
                  .collect(Collectors.toList());

          try {
              // create ObjectMapper
              ObjectMapper objectMapper = new ObjectMapper();


              // map to represent json object
              Map<String, Object> jsonObject = new HashMap<>();

              //null check
              if(matchingBeers.size()<1) {
                  jsonObject.put(String.valueOf(1), "Sorry! We can't find any beers that match these criteria!");
              }
             // loop to print the name of each beer returned by the api
              for (int i = 0; i < matchingBeers.size(); i++ ) {
              System.out.println(matchingBeers.get(i).getName());
              jsonObject.put(String.valueOf(i+1), matchingBeers.get(i).getName());
              }

              //test it
              System.out.println(jsonObject);


              // convert map to json string using objectmapper and return it
              String jsonString = objectMapper.writeValueAsString(jsonObject);

              return ResponseEntity.ok(jsonString);

          } catch (JsonProcessingException e) {
              // jsonprocessing exception handling is required for this to work
              e.printStackTrace();

              // Return an error response
              return ResponseEntity.status(500).body("{\"error\": \"Failed to generate JSON response\"}");
          }

          ////////////////////////////////////////
//          System.out.println(apiDummyDTO);
//    //return new ResponseEntity<>(apiDummyDTO.getTaste(), HttpStatus.OK);
//    List<ApiDTO> allBeers = apiService.getBeers();
//    taste = apiDummyDTO.getTaste();
//          System.out.println(taste);
//
//
//    List<ApiDTO> matchingBeers = allBeers.stream()
//            .filter(beer -> beer.getDescription().toLowerCase().contains(taste.toLowerCase()))
//            .collect(Collectors.toList());
//
//    String generatedName = matchingBeers.get(1).getName();
//
//          System.out.println(generatedName);
//    //loop to print the name of each beer returned by the api
//          for (int i = 0; i < matchingBeers.size(); i++ ) {
//        System.out.println(matchingBeers.get(i).getName());
//    }
//
//    //return new ResponseEntity<>(generatedName, HttpStatus.OK);
//    //return ResponseEntity.ok(generatedName);
//
//    //returns string in proper JSON format
//          return ResponseEntity.ok("{\"beername\":\"" + generatedName + "\"}");
//////////////////////////

}

    //returns beers that match request param
    private String taste = "backbone";
        @GetMapping("/data")
        public ResponseEntity<List<ApiDTO>> getBeersByTaste(@RequestParam String taste) {
            List<ApiDTO> allBeers = apiServiceAbv.getBeers(3F);

            List<ApiDTO> matchingBeers = allBeers.stream()
                    .filter(beer -> beer.getDescription().toLowerCase().contains(taste.toLowerCase()))
                    .collect(Collectors.toList());

            return ResponseEntity.ok(matchingBeers);
        }

//to return a list of beer names only
////        @GetMapping("/beerNames")
////        public ResponseEntity<List<String>> getBeerNames() {
////            List<ApiDTO> allBeers = apiService.getBeers();
////
////            List<String> beerNames = allBeers.stream()
//                    .map(ApiDTO::getName)
//                    .collect(Collectors.toList());
//
//            return ResponseEntity.ok(beerNames);
//        }

    @PostMapping("/random")
    public ResponseEntity<?> createNewProfile(@RequestBody LoginDTO loginDTO,
                                              Errors errors,
                                              HttpServletRequest request) {

        User thisUser = new User(loginDTO.getUsername(), loginDTO.getPassword());
        String username = thisUser.getUsername();
//

        //old way, without checking for beers matching username
//        @GetMapping("/random")
//    public ResponseEntity<?> getRandomBeer() {
        //Iterable<Beer> allUserBeers = beerRepository.findAll();

        //new way, checking for beers that match username first
        Iterable<Beer> thisUserBeers = beerRepository.findByUsername(username);



        Beer newestBeer = thisUserBeers.iterator().next();

        if (thisUserBeers == null) {
            return null;
        } else {

            for (Beer beer : thisUserBeers) {
                if (beer.getId() > newestBeer.getId()) {
                    newestBeer = beer;
                }
            }
        }
        System.out.println(newestBeer.getId());
/////

        //int proprietaryIndex = newestBeer.getName().length();

        //Optional<Beer> latestBeer = beerRepository.findById(1);

        double randomDouble= (Math.random()*100);

        int randomInt = (int) Math.round(randomDouble);

        System.out.println(randomInt);

        String part1;

        String part2;

        String part3;

        //call up the api for a random beer
        List<ApiDTO> anotherBeer = apiServiceRandom.getBeers();

        String anotherBeerName = anotherBeer.get(0).getName().toLowerCase();

        String [] anotherPartArray = anotherBeerName.split(" ");

        String anotherBeerPart = anotherPartArray[0];

        System.out.println(anotherBeerPart);

        //call up the api for a different random beer
        List<ApiDTO> aBeer = apiServiceRandom.getBeers();

        String beerName = aBeer.get(0).getName().toLowerCase();

        String [] part1Array = beerName.split(" ");

        //call up api for a different random beer
        List<ApiDTO> andAnotherBeer = apiServiceRandom.getBeers();


        //return 2nd word of beer name if beer name has more than one word. otherwise return "Decent"
        if(part1Array.length>1) {
            part1 = part1Array[1];

        } else {
            part1 = "Decent";
        }

        //call up first word of first suggested food pairing
        String beerFood = andAnotherBeer.get(0).getFood_pairing().get(0);

        String [] part2Array = beerFood.split(" ");

        part2 = part2Array[0];

        //if random int times 10 is 22, then the beer name is Golden Stinker. stretch goal to add special image on page if you create one with this name.
        if (randomInt == 22) {
            part1="Golden";
            part2="Stinker";
        }

        if ((newestBeer.getTastingNotes().length())%2==0) {
            part3 = "";
        } else {
            part3 = anotherBeerPart;
        }

        ProprietaryBeerName proprietaryBeerName = new ProprietaryBeerName(part1, part2, part3);

        //surpringly easy repo edit syntax
        newestBeer.setName(StringUtils.capitalize(proprietaryBeerName.getPart1().toLowerCase()) + " " +
                StringUtils.capitalize(proprietaryBeerName.getPart2().toLowerCase()) + " " +
                StringUtils.capitalize(proprietaryBeerName.getPart3().toLowerCase()));
        beerRepository.save(newestBeer);

        //send new name back to front end to display
        return ResponseEntity.ok(proprietaryBeerName);
    }

}




