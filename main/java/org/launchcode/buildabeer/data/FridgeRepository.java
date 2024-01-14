package org.launchcode.buildabeer.data;

import org.launchcode.buildabeer.models.Fridge;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FridgeRepository extends CrudRepository<Fridge, Integer> {
}
