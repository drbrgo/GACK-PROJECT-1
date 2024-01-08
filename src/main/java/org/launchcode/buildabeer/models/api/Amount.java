package org.launchcode.buildabeer.models.api;

public class Amount {
    private Double value;
    private String unit;

    public Amount() {
    }

    public Amount(Double value, String unit) {
        this.value = value;
        this.unit = unit;
    }


    public Double getValue() {
        return value;
    }

    public String getUnit() {
        return unit;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }
}
