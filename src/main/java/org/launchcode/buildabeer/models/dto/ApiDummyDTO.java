package org.launchcode.buildabeer.models.dto;

public class ApiDummyDTO {
    private String taste;

    private Float abv;

    public ApiDummyDTO(String taste, Float abv) {

        this.taste = taste;
        this.abv = abv;
    }

    public ApiDummyDTO() {
    }

    public String getTaste() {
        return taste;
    }

    public Float getAbv() {return abv;}

}
