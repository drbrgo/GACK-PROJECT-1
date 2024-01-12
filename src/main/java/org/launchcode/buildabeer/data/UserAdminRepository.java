package org.launchcode.buildabeer.data;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAdminRepository extends JpaRepository<org.launchcode.buildabeer.models.UserAdmin, Long> {
}
