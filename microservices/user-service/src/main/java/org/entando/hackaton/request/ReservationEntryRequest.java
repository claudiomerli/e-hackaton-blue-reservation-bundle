package org.entando.hackaton.request;

import lombok.Data;

@Data
public class ReservationEntryRequest {

    private Long roomID;
    private Integer guestNumber;

}
