package org.launchcode.buildabeer.models;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;

@Entity
public class Beer extends AbstractEntity{

    @ManyToOne
    @JoinColumn(name = "fridge_id")
    private Fridge fridge;

    @NotNull
    private String name;

    @NotNull
    private String tastingNotes;

    @NotNull
    private Double abv;

    public boolean favorite;

    public Beer() {}


    public Beer(String name, String tastingNotes, Double abv, Boolean favorite) {
        this.name = name;
        this.tastingNotes = tastingNotes;
        this.abv = abv;
        this.favorite = favorite;

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

    public boolean isFavorite() {
        return favorite;
    }

    public void setFavorite(boolean favorite) {
        this.favorite = favorite;
    }
}
