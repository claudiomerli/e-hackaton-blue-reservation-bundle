package org.entando.hackaton.mapper;

import org.entando.hackaton.entity.Reservation;
import org.entando.hackaton.request.ReservationRequest;
import org.entando.hackaton.response.ReservationResponse;

import java.util.Random;

public class ReservationMap {
    //TODO add mapstruct se ci sta tempo

    int leftLimit = 48; // numeral '0'
    int rightLimit = 122; // letter 'z'
    int targetStringLength = 10;
    Random random = new Random();
    public Reservation toDTO (ReservationRequest request) {
        Reservation reservation = new Reservation();
        reservation.setEndDate(request.getEndDate());
        reservation.setStartDate(request.getStartDate());
        reservation.setPaymentType(request.getPaymentType());
        reservation.setReservationCode(getReservationCode());
        return reservation;
    }

    public ReservationResponse toResponse (Reservation reservation){
        ReservationResponse reservationResponse = new ReservationResponse();
        reservationResponse.setId(reservation.getId());
        reservationResponse.setEndDate(reservation.getEndDate());
        reservationResponse.setStartDate(reservation.getStartDate());
        reservationResponse.setPaymentType(reservation.getPaymentType());
        reservationResponse.setReservationCode(reservation.getReservationCode());
        return reservationResponse;
    }

    private String getReservationCode() {
        return random.ints(
                        leftLimit, rightLimit + 1)
                .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
                .limit(targetStringLength)
                .collect(StringBuilder::new,
                        StringBuilder::appendCodePoint,
                        StringBuilder::append)
                .toString();
    }
}
