package org.launchcode.buildabeer.data;

import org.launchcode.buildabeer.models.CreateProfile;
import org.launchcode.buildabeer.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface CreateProfileRepository extends CrudRepository<CreateProfile, Long> {
    CreateProfile findByName(String username);
    //this interface returns a user and find them by username, it will look at the user model and see the field username
    //info is stored in database, insert and retrieve. spring will manage this class for me by putting @Repository. and will inject wherever they are put.
}
