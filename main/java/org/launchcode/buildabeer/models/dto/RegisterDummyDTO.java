package org.launchcode.buildabeer.models.dto;

public class RegisterDummyDTO {

    private String username;

    private String password;

    private String verifyPassword;

    public RegisterDummyDTO(String username, String password, String verifyPassword) {
        this.username = username;
        this.password = password;
        this.verifyPassword = verifyPassword;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getVerifyPassword() {
        return verifyPassword;
    }
}
