package org.launchcode.buildabeer.data;

import org.launchcode.buildabeer.models.Beer;
import org.launchcode.buildabeer.models.Fridge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FridgeRepository extends CrudRepository<Fridge, Integer> {

}
