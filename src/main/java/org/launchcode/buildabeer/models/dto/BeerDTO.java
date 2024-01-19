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

    private String setting;

    private String readingMaterial;

    private String sockColor;

    private Integer listNumber;

    private Boolean favorite;

    private String username;

    private Integer userId;

    //public BeerDTO() {}


    public BeerDTO(Fridge fridge, String name, String tastingNotes, Double abv, String setting,
                   String readingMaterial, String sockColor, Integer listNumber, Boolean favorite, String username, Integer userId) {
        this.fridge = fridge;
        this.name = name;
        this.tastingNotes = tastingNotes;
        this.abv = abv;
        this.setting = setting;
        this.readingMaterial = readingMaterial;
        this.sockColor = sockColor;
        this.listNumber = listNumber;
        this.favorite = favorite;
        this.username = username;
        this.userId = userId;
    }

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

    public Boolean getFavorite() {
        return favorite;
    }

    public void setFavorite(Boolean favorite) {
        this.favorite = favorite;
    }

    public String getUsername() {
        return username;
    }

    public Integer getUserId() {
        return userId;
    }
}
