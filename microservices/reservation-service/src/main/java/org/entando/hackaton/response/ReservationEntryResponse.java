package org.entando.hackaton.response;

import lombok.Data;

import java.util.UUID;

@Data
public class ReservationEntryResponse {

    private Long id;
    private Long  roomID;
    private Integer guestNumber;
}
