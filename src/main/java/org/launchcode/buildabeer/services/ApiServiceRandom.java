package org.launchcode.buildabeer.services;

import org.launchcode.buildabeer.models.dto.ApiDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class ApiServiceRandom {

    @Autowired
    private RestTemplate restTemplate;


    private String apiUrl = "https://api.punkapi.com/v2/beers/random";

    public List<ApiDTO> getBeers() {
        ResponseEntity<ApiDTO[]> response = restTemplate.getForEntity(apiUrl, ApiDTO[].class);
        return Arrays.asList(response.getBody());
    }
}