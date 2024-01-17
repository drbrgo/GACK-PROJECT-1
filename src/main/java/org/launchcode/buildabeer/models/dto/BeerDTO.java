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

    @NotNull
    private String wolfenstein;

    @NotNull
    private int barrelType;

    @NotNull
    private String basic;


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

    public String getWolfenstein() {
        return wolfenstein;
    }

    public void setWolfenstein(String wolfenstein) {
        this.wolfenstein = wolfenstein;
    }

    public int getBarrelType() {
        return barrelType;
    }

    public void setBarrelType(int barrelType) {
        this.barrelType = barrelType;
    }

    public String getBasic() {
        return basic;
    }

    public void setBasic(String basic) {
        this.basic = basic;
    }
}
