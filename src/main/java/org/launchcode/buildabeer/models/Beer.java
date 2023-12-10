package org.launchcode.buildabeer.models;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;

@Entity
public class Beer extends AbstractEntity{

    @ManyToOne
    private Fridge fridge;

}
