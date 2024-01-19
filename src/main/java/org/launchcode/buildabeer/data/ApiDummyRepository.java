package org.launchcode.buildabeer.data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.launchcode.buildabeer.models.ApiDummy;



@Repository
public interface ApiDummyRepository extends CrudRepository <ApiDummy, Integer> {
}
