package org.entando.hackaton.response;

import lombok.Data;
import org.entando.hackaton.request.ReservationEntryRequest;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
public class ReservationResponse {

    private Long id;
    private LocalDate startDate;
    private LocalDate endDate;
    private String paymentType;
    private String reservationCode;

    private String firstName;
    private String lastName;
    private String userEmail;
    private List<ReservationEntryResponse> reservationRequests;
}
