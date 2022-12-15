package org.entando.hackaton.service;

import org.entando.hackaton.entity.Reservation;
import org.entando.hackaton.mapper.ReservationMap;
import org.entando.hackaton.repository.ReservationRepository;
import org.entando.hackaton.request.ReservationRequest;
import org.entando.hackaton.response.ReservationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ReservationService {

    private final ReservationRepository reservationRepository;

    private final ReservationMap reservationMap = new ReservationMap();

    @Autowired
    public ReservationService(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    public ReservationResponse createReservation(ReservationRequest request) {
        return reservationMap.toResponse(
                reservationRepository.save(reservationMap.toEntity(request)));
    }

    public ReservationResponse getReservationByReservationCode(String reservationCode) {
        return reservationMap.toResponse(reservationRepository.
                findByReservationCode(reservationCode).orElseThrow());
    }

    public List<Long> getAllReservedRoomsByStartAndEndDate(LocalDate start, LocalDate end) {
        // TODO refactoring necessario
        List<Long> responses = new ArrayList<>();
        List<Reservation> allByStartDateAndEndDate = this.reservationRepository.findAll((root, query, criteriaBuilder) -> criteriaBuilder.or(
                criteriaBuilder.between(root.get("startDate"), start, end),
                criteriaBuilder.between(root.get("endDate"), start, end)
        ));

        allByStartDateAndEndDate.forEach(reservation ->
                reservation.getReservationEntry().forEach(reservationEntry ->
                        responses.add(reservationEntry.getRoomID()))
        );
        return responses;
    }

    public List<ReservationResponse> getAllReservationByStartAndEndDate(LocalDate start, LocalDate end) {
        List<ReservationResponse> responses = new ArrayList<>();
        List<Reservation> allByStartDateAndEndDate = this.reservationRepository.findAll((root, query, criteriaBuilder) -> criteriaBuilder.or(
                criteriaBuilder.between(root.get("startDate"), start, end),
                criteriaBuilder.between(root.get("endDate"), start, end)
        ));
        allByStartDateAndEndDate.forEach(
                reservation -> responses.add(
                        reservationMap.toResponse(reservation)
                )
        );
        return responses;
    }

    public ReservationResponse editReservation(String id, ReservationRequest request) throws Exception {
        Optional<Reservation> byId = reservationRepository.findById(UUID.fromString(id));
        if (byId.isEmpty()) {
            //TODO gestiore meglio l'errore
            throw new Exception("reservation id is not presente");
        }
        Reservation reservation = byId.get();
        reservation.setReservationCode(request.getReservationCode());
        reservation.setStartDate(request.getStartDate());
        reservation.setStartDate(request.getStartDate());
        reservation.setPaymentType(reservation.getPaymentType());
        return reservationMap.toResponse(reservationRepository.save(reservation));
    }

    @Transactional
    public void deleteReservation(String code) throws Exception {
        reservationRepository.deleteByReservationCode(code);
    }
}
