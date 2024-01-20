package org.launchcode.buildabeer.models.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class LoginDTO {

//    @NotNull(message = "Username is required")
//    @NotBlank(message = "Username is required")
    //@Size(min = 3, max = 30, message = "Username must be 3-30 characters long.") commenting out in the interest of
    //security through obscurity. This parameter should be in account creation only imo.
    private String username;

//    @NotNull(message = "Password is required")
//    @NotBlank(message = "Password is required")
    //@Size(min = 8, message = "Password must be at least 8 characters long") commenting out in the interest of
    //security through obscurity. This parameter should be in account creation only imo.
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
