package org.entando.hackaton.request;

import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Data
public class ReservationRequest {

    private LocalDate startDate;
    private LocalDate endDate;
    private String paymentType;
    private String reservationCode;

    private String firstName;
    private String lastName;
    private String userEmail;
    private List<ReservationEntryRequest> reservationRequests = new ArrayList<>();

}