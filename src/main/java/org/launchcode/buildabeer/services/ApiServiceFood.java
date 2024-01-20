package org.launchcode.buildabeer.services;

import org.launchcode.buildabeer.models.dto.ApiDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class ApiServiceFood {

    @Autowired
    private RestTemplate restTemplate;


    //@Value("https://api.punkapi.com/v2/beers?abv_gt=3")
    private String apiUrl = "https://api.punkapi.com/v2/beers?food=";

    public List<ApiDTO> getBeers(String keyword) {
        ResponseEntity<ApiDTO[]> response = restTemplate.getForEntity(apiUrl + keyword, ApiDTO[].class);
        return Arrays.asList(response.getBody());
    }
}

