package org.entando.hackaton.response;

import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Data
public class ReservationResponse {

    private UUID id;
    private Date startDate;
    private Date endDate;
    private String paymentType;
    private String reservationCode;
}
