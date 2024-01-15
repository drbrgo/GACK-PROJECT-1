package org.launchcode.buildabeer.models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;

import java.util.Objects;

@MappedSuperclass
public abstract class AbstractEntity {

    //Abstract method and constructor for setUserName in BrewFormController (Marleny)
    //May be removed as I am still not sure whether I need to setUserName even though it's coming from a cookie,
    // and whether i'll be generating instances or the id will be database-generated. See related note on
    // BrewFormController ln 45.
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private final int id;
//
//    protected AbstractEntity(int id) {
//        this.id = id;
//    }
//
//    public int getId() {
//        return id;
//    }
//
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass())
//            return false;
//        AbstractEntity that = (AbstractEntity) o;
//        return id == that.id;
//    }
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(id);
//    }
//
//    public abstract void setUserName(String username);
}