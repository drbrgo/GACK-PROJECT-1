package org.launchcode.buildabeer.data;

import org.launchcode.buildabeer.models.Beer;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BeerRepository extends CrudRepository<Beer, Integer> {
    Iterable<Beer> findByUsername(String username);
//    Beer findByUsername(String username);
}
