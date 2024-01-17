package org.launchcode.buildabeer.models.dto;

public class ApiDummyDTO {
    private String taste;

    public ApiDummyDTO(String taste) {
        this.taste = taste;
    }

    public ApiDummyDTO() {
    }

    public String getTaste() {
        return taste;
    }

}
