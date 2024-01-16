package org.launchcode.buildabeer.models.dto;


import jakarta.validation.constraints.NotNull;
import org.launchcode.buildabeer.models.BrewForm;

import java.util.List;

public class BrewFormDTO {


    public void convertToEntity() {
        BrewForm brewForm = new BrewForm();

        //SQL schema...

        @NotNull String username;

        @NotNull String wolfenstein;

        @NotNull String barrelType;

        @NotNull List<String> flavorNotes;

        @NotNull int basic;

        @NotNull String recentPlace;

        @NotNull String userComments;



}}
