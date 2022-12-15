package org.entando.hackaton.repository;

import org.entando.hackaton.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Repository
public interface ReservationRepository extends JpaRepository <Reservation , UUID>, JpaSpecificationExecutor<Reservation> {
    Reservation findByReservationCode (String reservationCode);
    List<Reservation> findAllByStartDateAndEndDate (Date start , Date end);
}
