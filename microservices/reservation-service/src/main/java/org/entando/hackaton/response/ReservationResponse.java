package org.entando.hackaton.response;

import lombok.Data;
import org.entando.hackaton.request.ReservationEntryRequest;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
public class ReservationResponse {

    private UUID id;
    private Date startDate;
    private Date endDate;
    private String paymentType;
    private String reservationCode;

    private String firstName;
    private String lastName;
    private String userEmail;
    private List<ReservationEntryResponse> reservationRequests;
}
