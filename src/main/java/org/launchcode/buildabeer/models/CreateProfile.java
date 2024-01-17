package org.launchcode.buildabeer.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CreateProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Generated Value defines primary key attributes for database. Generated Identity indicates primary keys for the entity using the database identity column.
    private Long id;
    private String name;
    private int birthdate;
    private int phoneNumber;
    private String emailAddress;
    private String password;

    public CreateProfile(Long id, String name, int birthdate, int phoneNumber, String emailAddress, String password) {
        this.id = id;
        this.name = name;
        this.birthdate = birthdate;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
        this.password = password;
    }

    //removed long id from constructor. the id will be assigned when it is set inside the database?

    public CreateProfile (){
        //no arg constructor
    }


    public Long getIdd() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(int birthdate) {
        this.birthdate = birthdate;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}