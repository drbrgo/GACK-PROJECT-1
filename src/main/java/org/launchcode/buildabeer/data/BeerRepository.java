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
            "JOIN create_profile ON beer.user_id= create_profile.user_id\n" +
            "WHERE beer.username= :username", nativeQuery = true)
    List<Beer> findBeersByUsername(@Param("username") String username);
    Iterable<Beer> findByUsername(String username);
    //changing join line from "JOIN create_profile ON user_id=  create_profile.id\n"
//=======
//public interface BeerRepository extends JpaRepository<Beer, Integer> {
//    Iterable<Beer> findByUsername(String username);
////    Beer findByUsername(String username);
//    List<Beer> findBeersByUsername(@Param("username") String username);
//
//    List<Beer> deleteById(int id);
//
//>>>>>>> main
}
