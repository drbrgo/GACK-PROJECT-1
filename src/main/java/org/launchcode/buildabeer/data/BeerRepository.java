package org.launchcode.buildabeer.data;

import org.launchcode.buildabeer.models.Beer;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BeerRepository extends CrudRepository<Beer, Integer> {
    //    @Query( "SELECT beer.name, beer.abv, beer.tasting_notes FROM beer \n" +
//            "JOIN fridge ON fridge_id= fridge.id\n" +
//            "JOIN `user` ON fridge.user_id= `user`.id\n" +
//            " WHERE user.username= :username ")
//    List<Beer> findAllByUser(@Param("username") String username);
    Iterable<Beer> findByUsername(String username);
//    Beer findByUsername(String username);
}
