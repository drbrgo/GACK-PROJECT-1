package org.launchcode.buildabeer.models.api;

public class Hops {
    private String name;
    private Amount amount;
    private String add;
    private String attribute;

    public Hops() {
    }

    public Hops(String name, Amount amount, String add, String attribute) {
        this.name = name;
        this.amount = amount;
        this.add = add;
        this.attribute = attribute;
    }

    public String getName() {
        return name;
    }

    public Amount getAmount() {
        return amount;
    }

    public String getAdd() {
        return add;
    }

    public String getAttribute() {
        return attribute;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAmount(Amount amount) {
        this.amount = amount;
    }

    public void setAdd(String add) {
        this.add = add;
    }

    public void setAttribute(String attribute) {
        this.attribute = attribute;
    }
}
