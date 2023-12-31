package org.launchcode.buildabeer.models;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;

@Entity
public class Beer extends AbstractEntity{

/*    @ManyToOne
    private Fridge fridge;*/


    private String name;

    @NotNull
    private String tastingNotes;

    @NotNull
    private Double abv;

    public Beer() {}

    public Beer(String name, String tastingNotes, Double abv) {
        this.name = name;
        this.tastingNotes = tastingNotes;
        this.abv = abv;
    }

    //might not need setters for anything other than name. we'll see how Marleny creates the beer
    //object with data from the form
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTastingNotes() {
        return tastingNotes;
    }

    public void setTastingNotes(String tastingNotes) {
        this.tastingNotes = tastingNotes;
    }

    public Double getAbv() {
        return abv;
    }

    public void setAbv(Double abv) {
        this.abv = abv;
    }
}
