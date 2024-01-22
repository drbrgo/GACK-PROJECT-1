package org.launchcode.buildabeer.data;

import org.launchcode.buildabeer.models.Beer;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BeerRepository extends JpaRepository<Beer, Integer> {
    Iterable<Beer> findByUsername(String username);
//    Beer findByUsername(String username);
    List<Beer> findBeersByUsername(@Param("username") String username);

    List<Beer> deleteById(int id);
//    @Query(value = "SET FOREIGN_KEY_CHECKS=0", nativeQuery = true)
//        List<Beer> negateForeignKeys();

//    @Query(value = "SET FOREIGN_KEY_CHECKS=1", nativeQuery = true)
//    List<Beer> returnForeignKeys();
    //@Query(value = "SET FOREIGN_KEY_CHECKS=0; DELETE FROM beer WHERE create_profile_user_id = :id; SET FOREIGN_KEY_CHECKS=1;", nativeQuery = true)
          //  List<Beer> deleteById(@Param("id") int id);
}
