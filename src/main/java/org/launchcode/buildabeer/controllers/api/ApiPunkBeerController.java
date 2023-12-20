package org.launchcode.buildabeer.controllers.api;


import com.mysql.cj.x.protobuf.MysqlxDatatypes;
import org.launchcode.buildabeer.models.ApiItem;
import org.launchcode.buildabeer.models.Beer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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
        @Autowired
        private RestTemplate restTemplate;

        @GetMapping("/data")
        public ResponseEntity<ArrayList> fetchDataFromExternalAPI() {
            String apiUrl = "https://api.punkapi.com/v2/beers?abv_lt=3";
            ArrayList result = restTemplate.getForObject(apiUrl, ArrayList.class);
            //System.out.println(result); does nothing
            System.out.println(result.get(1,2));
            return ResponseEntity.ok(result);
        }

    }

