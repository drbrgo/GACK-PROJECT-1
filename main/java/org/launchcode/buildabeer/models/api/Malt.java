package org.launchcode.buildabeer.models.api;

public class Malt {
    private String name;
    private Amount amount;

    public Malt() {
    }

    public Malt(String name, Amount amount) {
        this.name = name;
        this.amount = amount;
    }

    public String getName() {
        return name;
    }

    public Amount getAmount() {
        return amount;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAmount(Amount amount) {
        this.amount = amount;
    }
}
