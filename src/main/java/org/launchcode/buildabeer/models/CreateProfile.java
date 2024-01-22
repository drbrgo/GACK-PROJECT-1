package org.launchcode.buildabeer.models;

import jakarta.persistence.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Date;


@Entity
public class CreateProfile extends AbstractEntity {
    private String name;

    private String pwHash;
    private Date birthdate;
    private Long phoneNumber;
    private String emailAddress;

    @OneToOne
    private Fridge fridge;

    public CreateProfile() {
    }
//empty constructor to pass to the form, so it has knowledge of what the structure is for the object

    //second contructor to instantiate the object
    public CreateProfile(String name, String password, Date birthdate, Long phoneNumber, String emailAddress) {
        this.name = name;
        this.pwHash = encoder.encode(password);//constructor to receive a password but then encrypt it as it is being stored in password hash
        this.birthdate = birthdate;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
    }
    //when we receive a string password from the form, we will encrypt it here and give it the password and set that value for the password hash and that is in the database.
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public Long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    // Static method to use the bcrypt dependency for encoding
    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    //instantiates a new BCryptPasswordEncoder, allows to access methods to encrypt and check to see if it matches.

    // Instance method to use the bcrypt multi-step matcher (.equals is not enough)
    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }
    //will receive the password being used to log-in

}


