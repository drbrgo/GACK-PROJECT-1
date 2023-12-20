package org.launchcode.buildabeer.models.api;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class Ingredients {

    private ArrayList<Malt> malt;

    private ArrayList<Hops> hops;

    private String yeast;

    public Ingredients() {
    }

    public Ingredients(ArrayList<Malt> malt, ArrayList<Hops> hops, String yeast) {
        this.malt = malt;
        this.hops = hops;
        this.yeast = yeast;
    }

    public ArrayList<Malt> getMalt() {
        return malt;
    }

    public ArrayList<Hops> getHops() {
        return hops;
    }

    public String getYeast() {
        return yeast;
    }

    public void setMalt(ArrayList<Malt> malt) {
        this.malt = malt;
    }

    public void setHops(ArrayList<Hops> hops) {
        this.hops = hops;
    }

    public void setYeast(String yeast) {
        this.yeast = yeast;
    }
}
