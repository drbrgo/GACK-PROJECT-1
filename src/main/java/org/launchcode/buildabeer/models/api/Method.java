package org.launchcode.buildabeer.models.api;

public class Method {

    private MashTemp mashTemp;
    private Fermentation fermentation;
    private String twist;

    public Method() {
    }

    public Method(MashTemp mashTemp, Fermentation fermentation, String twist) {
        this.mashTemp = mashTemp;
        this.fermentation = fermentation;
        this.twist = twist;
    }

    public MashTemp getMashTemp() {
        return mashTemp;
    }

    public Fermentation getFermentation() {
        return fermentation;
    }

    public String getTwist() {
        return twist;
    }

    public void setMashTemp(MashTemp mashTemp) {
        this.mashTemp = mashTemp;
    }

    public void setFermentation(Fermentation fermentation) {
        this.fermentation = fermentation;
    }

    public void setTwist(String twist) {
        this.twist = twist;
    }
}
