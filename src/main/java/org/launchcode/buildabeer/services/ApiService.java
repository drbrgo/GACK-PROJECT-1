package org.launchcode.buildabeer.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.launchcode.buildabeer.models.dto.ApiDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@Service
public class ApiService {

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



        @Value("https://api.punkapi.com/v2/beers?abv_lt=3")
        private String apiUrl;

        public List<ApiDTO> getBeers() {
            ResponseEntity<ApiDTO[]> response = restTemplate.getForEntity(apiUrl, ApiDTO[].class);
            return Arrays.asList(response.getBody());
        }
    }



