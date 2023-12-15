package org.launchcode.buildabeer.models;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

import java.util.List;

@Entity
public class Fridge extends AbstractEntity{
 
    /*@OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany
    @JoinColumn(name = "beer_id")

    private List<Beer> beers;

    public Fridge(){}

    public Fridge(User user, List<Beer> beers) {
        this.user = user;
        this.beers = beers;
    }

}
