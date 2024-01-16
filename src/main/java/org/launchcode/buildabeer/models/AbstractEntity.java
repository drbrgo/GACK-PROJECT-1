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
}