package org.entando.hackaton.request;

import lombok.Data;

import java.time.LocalDate;

@Data
public class DateRequest {

    private LocalDate startDate;
    private LocalDate endDate;
}
