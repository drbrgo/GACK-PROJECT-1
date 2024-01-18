package org.launchcode.buildabeer.data;

import org.launchcode.buildabeer.models.CreateProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface CreateProfileRepository extends CrudRepository<CreateProfile, Long> {
}
