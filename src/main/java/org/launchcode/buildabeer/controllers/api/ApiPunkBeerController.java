package org.launchcode.buildabeer.controllers.api;


import org.launchcode.buildabeer.models.dto.ApiDTO;
import org.launchcode.buildabeer.services.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class ApiPunkBeerController {

    //@RequestMapping("/{userId}") or something of the like to specify which list of beers we'll be calling to
    //find the most recent one and use its data to make a name

    //this was from java coder yt --
//    public List<ApiItem> getapiItem(Double abv) {
//
//        RestTemplate restTemplate = new RestTemplate();
//
//        List<Beer> beers = Arrays.asList(
//                new Beer("1", "tastingnotes", 5.24),
//                new Beer("2", "difftastingnotes", 3.5)
//                );
//
//
//           List<ApiItem> returned= beers.stream().map(beer-> {
//                Beer beerApi = restTemplate.getForObject("https://api.punkapi.com/v2/beers?abv_lt=" + beer.getAbv(),
//                        Beer.class);
//                return new ApiItem(beerApi.getName(), beerApi.getTastingNotes(), beerApi.getAbv());
//            })
//                    .collect(Collectors.toList());
//        System.out.println(returned);
//            return returned;
//        }

    //let's try this one instead

//        @Autowired
//        private RestTemplate restTemplate;

        @Autowired
        private ApiService apiService;

        //returns all beers at the url
//        @GetMapping("/data")
//        public ResponseEntity<List<ApiDTO>> fetchDataFromExternalAPI() {
//            String apiUrl = "https://api.punkapi.com/v2/beers?abv_lt=3";
//            List<ApiDTO> beers = apiService.getBeers();
//            return ResponseEntity.ok(beers);
//        }

    //returns beer at specific index
//    @GetMapping("/data")
//    public ResponseEntity<ApiDTO> fetchDataFromExternalAPI() {
//        String apiUrl = "https://api.punkapi.com/v2/beers?abv_lt=3";
//        List<ApiDTO> beers = apiService.getBeers();
//        ApiDTO beer = beers.isEmpty() ? null : beers.get(0);
//        return ResponseEntity.ok(beer);
//    }

//returns beers that match request param
    private String taste = "backbone";
        @GetMapping("/data")
        public ResponseEntity<List<ApiDTO>> getBeersByTaste(@RequestParam String taste) {
            List<ApiDTO> allBeers = apiService.getBeers();

            List<ApiDTO> matchingBeers = allBeers.stream()
                    .filter(beer -> beer.getDescription().toLowerCase().contains(taste.toLowerCase()))
                    .collect(Collectors.toList());

            return ResponseEntity.ok(matchingBeers);
        }

//to return a list of beer names only
//        @GetMapping("/beerNames")
//        public ResponseEntity<List<String>> getBeerNames() {
//            List<ApiDTO> allBeers = apiService.getBeers();
//
//            List<String> beerNames = allBeers.stream()
//                    .map(ApiDTO::getName)
//                    .collect(Collectors.toList());
//
//            return ResponseEntity.ok(beerNames);
//        }
}




