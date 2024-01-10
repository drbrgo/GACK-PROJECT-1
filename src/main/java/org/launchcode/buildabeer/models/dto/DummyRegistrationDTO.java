package org.launchcode.buildabeer.models.dto;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class DummyRegistrationDTO extends LoginDTO {

    @NotNull(message = "Password is required")
    @NotBlank(message = "Password is required")
    private String verifyPassword;

    public String getVerifyPassword() {
        return verifyPassword;
    }

    public void setVerifyPassword(String verifyPassword) {
        this.verifyPassword = verifyPassword;
    }
    @Override
    public String toString() {
        return "DummyRegistrationDTO{" +
                "username='" + getUsername() + '\'' +
                ", password='" + getPassword() + '\'' +
                ", verifyPassword='" + getVerifyPassword() + '\'' +
                '}';
    }
}

