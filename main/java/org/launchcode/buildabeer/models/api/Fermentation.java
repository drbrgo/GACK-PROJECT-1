package org.launchcode.buildabeer.models.api;

public class Fermentation {
    private Temp temp;

    public Fermentation() {
    }

    public Fermentation(Temp temp) {
        this.temp = temp;
    }

    public Temp getTemp() {
        return temp;
    }

    public void setTemp(Temp temp) {
        this.temp = temp;
    }
}
