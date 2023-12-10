package org.launchcode.buildabeer.data;

import org.launchcode.buildabeer.models.Fridge;
import org.springframework.data.repository.CrudRepository;

public interface FridgeRepository extends CrudRepository<Fridge, Integer> {
}
