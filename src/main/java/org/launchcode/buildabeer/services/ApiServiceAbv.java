package org.launchcode.buildabeer.services;

import org.launchcode.buildabeer.models.dto.ApiDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class ApiServiceAbv {

    @Autowired
    private RestTemplate restTemplate;

//    @Autowired
//    private ObjectMapper objectMapper;

//    public ApiDTO getData() {
//        String apiUrl = "https://api.punkapi.com/v2/beers?abv_lt=3";
//        String jsonResult = restTemplate.getForObject(apiUrl, String.class);
//
//        try {
//            return objectMapper.readValue(jsonResult, ApiDTO.class);
//        } catch (IOException e) {
//            throw new RuntimeException("Error deserializing JSON", e);
//        }
//    }


    //this API service searches by abv
        private String apiUrl = "https://api.punkapi.com/v2/beers?abv_gt=";

        public List<ApiDTO> getBeers(Float abv) {
            ResponseEntity<ApiDTO[]> response = restTemplate.getForEntity(apiUrl + abv + "&per_page=80", ApiDTO[].class);
            return Arrays.asList(response.getBody());
        }
    }



