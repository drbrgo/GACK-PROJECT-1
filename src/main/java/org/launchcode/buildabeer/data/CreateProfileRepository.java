package org.launchcode.buildabeer.data;

import org.launchcode.buildabeer.models.CreateProfileEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CreateProfileRepository extends JpaRepository<CreateProfileEntity, Long> {

}
