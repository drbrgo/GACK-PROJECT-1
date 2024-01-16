package org.launchcode.buildabeer.data;

import org.launchcode.buildabeer.models.Beer;
import org.launchcode.buildabeer.models.Fridge;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FridgeRepository extends CrudRepository<Fridge, Integer> {
//    @Query( "SELECT beer.name, beer.abv, beer.tasting_notes FROM beer \n" +
//            "JOIN fridge ON fridge_id= fridge.id\n" +
//            "JOIN `user` ON fridge.user_id= `user`.id;\n" +
//            " WHERE user.username= :username ")
//    List<Beer> findBeersByUsername(@Param("username") String username);
}
