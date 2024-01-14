package org.launchcode.buildabeer.models.api;

public class MashTemp {
    private Temp temp;
    private Double duration;

    public MashTemp() {
    }

    public MashTemp(Temp temp, Double duration) {
        this.temp = temp;
        this.duration = duration;
    }

    public Temp getTemp() {
        return temp;
    }

    public Double getDuration() {
        return duration;
    }

    public void setTemp(Temp temp) {
        this.temp = temp;
    }

    public void setDuration(Double duration) {
        this.duration = duration;
    }
}
