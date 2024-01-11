package org.launchcode.buildabeer.models.dto;

import jakarta.validation.constraints.NotNull;
import org.launchcode.buildabeer.models.Fridge;

public class BeerDTO {

    @NotNull
    private Fridge fridge;

    @NotNull
    private String name;

    @NotNull
    private String tastingNotes;

    @NotNull
    private Double abv;


    public BeerDTO() {}

    public Fridge getFridge() {
        return fridge;
    }

    public void setFridge(Fridge fridge) {
        this.fridge = fridge;
    }

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
