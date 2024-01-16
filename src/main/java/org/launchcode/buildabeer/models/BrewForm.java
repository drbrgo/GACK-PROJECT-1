package org.launchcode.buildabeer.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.util.List;

@Entity
public class BrewForm extends AbstractEntity implements BrewFormInterface {

//    @OneToOne
//    @JoinColumn(name = "results_id")

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "results_id", nullable = false)
    private Long results_id;

    private String loginName;

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

    public BrewForm() {
        super();

    }

    //unsure whether getter and setters are needed here...i'll look into it
@Override
   public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
    }

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

    public void setFlavorNotes(List<String> flavorNotes) {
    }

}
