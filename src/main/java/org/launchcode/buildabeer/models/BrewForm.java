package org.launchcode.buildabeer.models;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotNull;

@Entity
public class BrewForm extends AbstractEntity {


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
