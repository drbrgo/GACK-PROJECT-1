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

    private String setting;

    private String readingMaterial;

    private String sockColor;

    private Integer listNumber;

    private boolean favorite;

    public Beer() {}


    public Beer(Fridge fridge, String name, String tastingNotes, Double abv, String setting, String readingMaterial, String sockColor, Integer listNumber, boolean favorite) {
        this.fridge = fridge;
        this.name = name;
        this.tastingNotes = tastingNotes;
        this.abv = abv;
        this.setting = setting;
        this.readingMaterial = readingMaterial;
        this.sockColor = sockColor;
        this.listNumber = listNumber;
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

    public Fridge getFridge() {
        return fridge;
    }

    public void setFridge(Fridge fridge) {
        this.fridge = fridge;
    }

    public String getSetting() {
        return setting;
    }

    public void setSetting(String setting) {
        this.setting = setting;
    }

    public String getReadingMaterial() {
        return readingMaterial;
    }

    public void setReadingMaterial(String readingMaterial) {
        this.readingMaterial = readingMaterial;
    }

    public String getSockColor() {
        return sockColor;
    }

    public void setSockColor(String sockColor) {
        this.sockColor = sockColor;
    }

    public Integer getListNumber() {
        return listNumber;
    }

    public void setListNumber(Integer listNumber) {
        this.listNumber = listNumber;
    }
}
