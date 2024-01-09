package org.launchcode.buildabeer.models.dto;

import org.launchcode.buildabeer.models.api.*;

import java.util.ArrayList;

public class ApiDTO {

    private Integer id;
    private String name;
    private String tagline;
    private String first_brewed;
    private String description;
    private String image_url;
    private Double abv;
    private Double ibu;
    private Double target_fg;
    private Double target_og;
    private Double ebc;
    private Double srm;
    private Double ph;
    private Double attentuation_level;
    private Volume volume;
    private BoilVolume boil_volume;
    private Method method;
    private Ingredients ingredients;
    private String yeast;
    private ArrayList<String> food_pairing;
    private String brewers_tips;
    private String contributed_by;

    public ApiDTO(Integer id, String name, String tagline, String first_brewed, String description, String image_url, Double abv, Double ibu, Double target_fg, Double target_og, Double ebc, Double srm, Double ph, Double attentuation_level, Volume volume, BoilVolume boil_volume, Method method, Ingredients ingredients, String yeast, ArrayList<String> food_pairing, String brewers_tips, String contributed_by) {
        this.id = id;
        this.name = name;
        this.tagline = tagline;
        this.first_brewed = first_brewed;
        this.description = description;
        this.image_url = image_url;
        this.abv = abv;
        this.ibu = ibu;
        this.target_fg = target_fg;
        this.target_og = target_og;
        this.ebc = ebc;
        this.srm = srm;
        this.ph = ph;
        this.attentuation_level = attentuation_level;
        this.volume = volume;
        this.boil_volume = boil_volume;
        this.method = method;
        this.ingredients = ingredients;
        this.yeast = yeast;
        this.food_pairing = food_pairing;
        this.brewers_tips = brewers_tips;
        this.contributed_by = contributed_by;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getTagline() {
        return tagline;
    }

    public String getFirst_brewed() {
        return first_brewed;
    }

    public String getDescription() {
        return description;
    }

    public String getImage_url() {
        return image_url;
    }

    public Double getAbv() {
        return abv;
    }

    public Double getIbu() {
        return ibu;
    }

    public Double getTarget_fg() {
        return target_fg;
    }

    public Double getTarget_og() {
        return target_og;
    }

    public Double getEbc() {
        return ebc;
    }

    public Double getSrm() {
        return srm;
    }

    public Double getPh() {
        return ph;
    }

    public Double getAttentuation_level() {
        return attentuation_level;
    }

    public Volume getVolume() {
        return volume;
    }

    public BoilVolume getBoil_volume() {
        return boil_volume;
    }

    public Method getMethod() {
        return method;
    }

    public Ingredients getIngredients() {
        return ingredients;
    }

    public String getYeast() {
        return yeast;
    }

    public ArrayList<String> getFood_pairing() {
        return food_pairing;
    }

    public String getBrewers_tips() {
        return brewers_tips;
    }

    public String getContributed_by() {
        return contributed_by;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setTagline(String tagline) {
        this.tagline = tagline;
    }

    public void setFirst_brewed(String first_brewed) {
        this.first_brewed = first_brewed;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public void setAbv(Double abv) {
        this.abv = abv;
    }

    public void setIbu(Double ibu) {
        this.ibu = ibu;
    }

    public void setTarget_fg(Double target_fg) {
        this.target_fg = target_fg;
    }

    public void setTarget_og(Double target_og) {
        this.target_og = target_og;
    }

    public void setEbc(Double ebc) {
        this.ebc = ebc;
    }

    public void setSrm(Double srm) {
        this.srm = srm;
    }

    public void setPh(Double ph) {
        this.ph = ph;
    }

    public void setAttentuation_level(Double attentuation_level) {
        this.attentuation_level = attentuation_level;
    }

    public void setVolume(Volume volume) {
        this.volume = volume;
    }

    public void setBoil_volume(BoilVolume boil_volume) {
        this.boil_volume = boil_volume;
    }

    public void setMethod(Method method) {
        this.method = method;
    }

    public void setIngredients(Ingredients ingredients) {
        this.ingredients = ingredients;
    }

    public void setYeast(String yeast) {
        this.yeast = yeast;
    }

    public void setFood_pairing(ArrayList<String> food_pairing) {
        this.food_pairing = food_pairing;
    }

    public void setBrewers_tips(String brewers_tips) {
        this.brewers_tips = brewers_tips;
    }

    public void setContributed_by(String contributed_by) {
        this.contributed_by = contributed_by;
    }
}