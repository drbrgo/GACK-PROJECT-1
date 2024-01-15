package org.launchcode.buildabeer.models;

import jakarta.persistence.Entity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Entity
public class RegisterDummy extends AbstractEntity{

    private String username;

    private String pwHash;

    public RegisterDummy(String username, String password) {
        super();
        this.username = username;
        this.pwHash = encoder.encode(password);
    }


    public RegisterDummy() {
        super();
    }

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPwHash() {
        return pwHash;
    }

    public void setPwHash(String pwHash) {
        this.pwHash = pwHash;
    }
}
