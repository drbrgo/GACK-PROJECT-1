package org.launchcode.buildabeer.models.dto;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class CreateProfileDTO {
    private String firstName;
    private String lastName;
    private int birthdate;
    private int phoneNumber;
    private String emailAddress;
    private String streetAddress;
    private String city;
    private String state;
    private int zipCode;
}
