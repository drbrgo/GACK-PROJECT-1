package org.launchcode.buildabeer.models;

import jakarta.persistence.Entity;

@Entity
public class ApiDummy extends AbstractEntity {

    private String taste;

    public ApiDummy(String taste) {
        this.taste = taste;
    }

    public ApiDummy() {
    }

    public String getTaste() {
        return taste;
    }

    public void setTaste(String taste) {
        this.taste = taste;
    }
}
