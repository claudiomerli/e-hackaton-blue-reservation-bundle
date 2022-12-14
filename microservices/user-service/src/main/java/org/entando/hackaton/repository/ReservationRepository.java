package org.entando.hackaton.repository;

import org.entando.hackaton.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ReservationRepository extends JpaRepository <Reservation , UUID> {
}
