package org.launchcode.buildabeer.models;

import jakarta.persistence.Entity;

@Entity
public class Fridge extends AbstractEntity{
    public Fridge() {
        super();
    }
 
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
    }*/

}
