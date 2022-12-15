package org.entando.hackaton.response;

import lombok.Data;

import java.util.UUID;

@Data
public class ReservationEntryResponse {

    private UUID id;
    private Long  roomID;
    private Integer guestNumber;
}
