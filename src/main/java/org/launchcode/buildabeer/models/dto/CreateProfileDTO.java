package org.launchcode.buildabeer.models.dto;

import java.util.Date;

public class CreateProfileDTO {
    private int userId;
    private String name;

    private String password;

    private String verifyPassword;

    private Date birthdate;
    private Long phoneNumber;
    private String emailAddress;

    public CreateProfileDTO(int userId, String name, String password, String verifyPassword, Date birthdate, Long phoneNumber, String emailAddress) {
        this.userId = userId;
        this.name = name;
        this.password = password;
        this.verifyPassword = verifyPassword;
        this.birthdate = birthdate;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }

    public String getVerifyPassword() {
        return verifyPassword;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public Long getPhoneNumber() {
        return phoneNumber;
    }

    public String getEmailAddress() {
        return emailAddress;
    }
}
