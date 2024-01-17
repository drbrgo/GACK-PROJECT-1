package org.launchcode.buildabeer.controllers.api;


import com.fasterxml.jackson.core.JsonProcessingException;
import org.launchcode.buildabeer.data.BeerRepository;
import org.launchcode.buildabeer.data.UserRepository;
import org.launchcode.buildabeer.models.dto.ApiDTO;
import org.launchcode.buildabeer.models.dto.ApiDummyDTO;
import org.launchcode.buildabeer.services.ApiServiceAbv;
import org.launchcode.buildabeer.services.ApiServiceFood;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.fasterxml.jackson.databind.ObjectMapper;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
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

    //returns beer by keyword - limited to first page of beers under 3%
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
}




