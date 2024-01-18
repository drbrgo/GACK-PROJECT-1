package org.launchcode.buildabeer.data;

import org.launchcode.buildabeer.models.Beer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BeerRepository extends CrudRepository<Beer, Integer> {
    @Query( value = "SELECT beer.* FROM beer \n" +
            "JOIN fridge ON beer.fridge_id = fridge.id \n" +
            "JOIN `user` ON fridge.user_id= `user`.id\n" +
            " WHERE user.username= :username ", nativeQuery = true)
    List<Beer> findBeersByUsername(@Param("username") String username);
}
