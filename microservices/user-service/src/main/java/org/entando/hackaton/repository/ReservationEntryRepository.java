package org.entando.hackaton.repository;

import org.entando.hackaton.entity.ReservationEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ReservationEntryRepository extends JpaRepository<ReservationEntry , UUID> {
}
