package org.entando.hackaton.mapper;

import org.entando.hackaton.entity.Reservation;
import org.entando.hackaton.entity.ReservationEntry;
import org.entando.hackaton.request.ReservationEntryRequest;
import org.entando.hackaton.request.ReservationRequest;
import org.entando.hackaton.response.ReservationEntryResponse;
import org.entando.hackaton.response.ReservationResponse;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class ReservationMap {
    //TODO add mapstruct se ci sta tempo

    int leftLimit = 48; // numeral '0'
    int rightLimit = 122; // letter 'z'
    int targetStringLength = 10;
    Random random = new Random();
    public Reservation toEntity(ReservationRequest request) {
        Reservation reservation = new Reservation();
        List<ReservationEntry> reservationEntry = new ArrayList<>();

        reservation.setEndDate(request.getEndDate());
        reservation.setStartDate(request.getStartDate());
        reservation.setPaymentType(request.getPaymentType());
        reservation.setReservationCode(getReservationCode());
        request.getReservationRequests().forEach(
                reservationEntryRequest ->
                        reservationEntry.add(toDto(reservationEntryRequest,reservation))
        );
        reservation.setReservationEntry(reservationEntry);
        return reservation;
    }

    public ReservationResponse toResponse (Reservation reservation){
        ReservationResponse reservationResponse = new ReservationResponse();
        List<ReservationEntryResponse>  reservationEntryResponses = new ArrayList<>();
        reservationResponse.setId(reservation.getId());
        reservationResponse.setEndDate(reservation.getEndDate());
        reservationResponse.setStartDate(reservation.getStartDate());
        reservationResponse.setPaymentType(reservation.getPaymentType());
        reservationResponse.setReservationCode(reservation.getReservationCode());
        reservation.getReservationEntry().forEach(
                reservationEntry ->
                        reservationEntryResponses.add(toResponse(reservationEntry))
        );
        reservationResponse.setReservationRequests(reservationEntryResponses);
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


    private ReservationEntry toDto (ReservationEntryRequest request, Reservation reservation) {
        ReservationEntry reservationEntry = new ReservationEntry();
        reservationEntry.setRoomID(request.getRoomID());
        reservationEntry.setGuestNumber(request.getGuestNumber());
        reservationEntry.setReservation(reservation);
        return reservationEntry;
    }

    private ReservationEntryResponse toResponse (ReservationEntry dto) {
        ReservationEntryResponse response = new ReservationEntryResponse();
        response.setRoomID(dto.getRoomID());
        response.setGuestNumber(dto.getGuestNumber());
        response.setId(dto.getId());
        return response;
    }
}
