package org.launchcode.buildabeer.data;

import org.launchcode.buildabeer.models.CreateProfile;
import org.launchcode.buildabeer.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface CreateProfileRepository extends JpaRepository<CreateProfile, Long> {
    CreateProfile findByName(String username);
}
