package org.launchcode.buildabeer.models;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotNull;
import org.springframework.context.annotation.EnableMBeanExport;

@Entity
public class BrewForm extends AbstractEntity {

    @OneToOne
    @JoinColumn(name = "results_id")
    p

    private String username;

    @NotNull
    private String wolfenstein;

    @NotNull
    private String barrelType;

    @NotNull
    private int basic;

    @NotNull
    private String recentPlace;

    @NotNull
    private String userComments;

    public BrewForm(String username, String wolfenstein, String barrelType, int basic, String recentPlace,
                    String userComments) {
        this.username = username;
        this.wolfenstein = wolfenstein;
        this.barrelType = barrelType;
        this.basic = basic;
        this.recentPlace = recentPlace;
        this.userComments = userComments;
    }

    public BrewForm() {

    }
//unsure whether getter and setters are needed here...i'll look into it

    public String getUsername() {
        return username;
    }

//    public void setUsername(String username) {
//        this.username = username;
//    }

    public String getWolfenstein() {
        return wolfenstein;
    }

    public void setWolfenstein(String wolfenstein) {
        this.wolfenstein = wolfenstein;
    }

    public String getBarrelType() {
        return barrelType;
    }

    public void setBarrelType(String barrelType) {
        this.barrelType = barrelType;
    }

    public int getBasic() {
        return basic;
    }

    public void setBasic(int basic) {
        this.basic = basic;
    }

    public String getRecentPlace() {
        return recentPlace;
    }

    public void setRecentPlace(String recentPlace) {
        this.recentPlace = recentPlace;
    }

    public String getUserComments() {
        return userComments;
    }

    public void setUserComments(String userComments) {
        this.userComments = userComments;
    }
}
