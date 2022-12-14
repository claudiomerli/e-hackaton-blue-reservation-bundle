package org.entando.hackaton.request;

import lombok.Data;

import java.util.Date;


@Data
public class ReservationRequest {

    private Date startDate;
    private Date endDate;
    private String paymentType;
    private String reservationCode;

}
