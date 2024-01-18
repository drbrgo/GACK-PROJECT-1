package org.launchcode.buildabeer.models;

import org.springframework.util.StringUtils;

import java.util.Optional;

public class ProprietaryBeerName {

    private String part1;

    private String part2;

    private  String part3;

    public ProprietaryBeerName(String part1, String part2, String part3) {
        this.part1 = StringUtils.capitalize(part1.toLowerCase());
        this.part2 = StringUtils.capitalize(part2.toLowerCase());
        this.part3 = StringUtils.capitalize(part3.toLowerCase());
    }

    public String getPart1() {
        return part1;
    }

    public void setPart1(String part1) {
        this.part1 = part1;
    }

    public String getPart2() {
        return part2;
    }

    public void setPart2(String part2) {
        this.part2 = part2;
    }

    public String getPart3() {
        return part3;
    }

    public void setPart3(String part3) {
        this.part3 = part3;
    }
}
