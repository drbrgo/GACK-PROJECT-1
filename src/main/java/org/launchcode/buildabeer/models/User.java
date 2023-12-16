package org.launchcode.buildabeer.models;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

//Test line

@Entity
public class User extends AbstractEntity {

    @NotNull
    @NotBlank
    private String username;

    @NotNull
    @NotBlank
    private String pwHash;

   /* @OneToOne(mappedBy = "fridge")
    private Fridge fridge;*/


    public User() {}

    public User(String username, String password) {
        this.username = username;
        this.pwHash = encoder.encode(password);
    }

    public String getUsername() {
        return username;
    }

    // Static method to use the bcrypt dependency for encoding
    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    // Instance method to use the bcrypt multi-step matcher (.equals is not enough)
    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }

}