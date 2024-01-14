package org.launchcode.buildabeer.models.dto;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class DummyRegistrationDTO {

    private String username;

    private String password;

    private String verifyPassword;

    public DummyRegistrationDTO(String username, String password, String verifyPassword) {
        this.username = username;
        this.password = password;
        this.verifyPassword = verifyPassword;
    }

    public DummyRegistrationDTO() {
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


    //public class DummyRegistrationDTO extends LoginDTO {
//
//    @NotNull(message = "Password is required")
//    @NotBlank(message = "Password is required")
//    private String verifyPassword;
//
//    public String getVerifyPassword() {
//        return verifyPassword;
//    }
//
//    public void setVerifyPassword(String verifyPassword) {
//        this.verifyPassword = verifyPassword;
//    }
//    @Override
//    public String toString() {
//        return "DummyRegistrationDTO{" +
//                "username='" + getUsername() + '\'' +
//                ", password='" + getPassword() + '\'' +
//                ", verifyPassword='" + getVerifyPassword() + '\'' +
//                '}';
//    }


