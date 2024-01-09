package org.launchcode.buildabeer.models.dto;

import org.launchcode.buildabeer.models.Beer;
import org.launchcode.buildabeer.models.User;

import java.util.List;


public class FridgeDTO {

    private User user;
    private List<Beer> beers;

    public FridgeDTO(User user, List<Beer> beers) {
        this.user = user;
        this.beers = beers;
    }

    public FridgeDTO(){};

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Beer> getBeers() {
        return beers;
    }

    public void setBeers(List<Beer> beers) {
        this.beers = beers;
    }
}
