package org.launchcode.buildabeer.data;

import org.launchcode.buildabeer.models.RegisterDummy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegisterDummyRepository extends JpaRepository<RegisterDummy, Integer> {
}
