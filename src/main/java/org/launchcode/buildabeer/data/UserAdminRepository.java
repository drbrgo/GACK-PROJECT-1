package org.launchcode.buildabeer.data;

import org.launchcode.buildabeer.models.UserAdmin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface UserAdminRepository extends CrudRepository<UserAdmin, Long> {
}
