package org.launchcode.buildabeer.data;

import org.launchcode.buildabeer.models.CreateProfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CreateProfileRepository extends JpaRepository<CreateProfile, Long> {
}
