package org.entando.hackaton.controller;

import org.entando.hackaton.request.DateRequest;
import org.entando.hackaton.request.ReservationRequest;
import org.entando.hackaton.response.ReservationResponse;
import org.entando.hackaton.service.ReservationService;
import org.entando.hackaton.utils.UtilsDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservation")
@CrossOrigin
public class ReservationController {


    private final ReservationService reservationService;

    @Autowired
    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @PostMapping
    public ReservationResponse createReservation (@RequestBody ReservationRequest request){
        return reservationService.createReservation(request);
    }

    @PostMapping("/searchRoomByDates")
    public List<Long> getAllReservedRoomsByStartAndEndDate (@RequestBody DateRequest request){
        return reservationService.getAllReservedRoomsByStartAndEndDate(request.getStartDate(),request.getEndDate());
    }

    @PostMapping("/searchReservationByDates")
    public List<ReservationResponse> getAllReservetionByStartAndEndDate (@RequestBody DateRequest request){
        return reservationService.getAllReservationByStartAndEndDate(request.getStartDate(),request.getEndDate());
    }


    @PutMapping("/{reservationID}")
    public ReservationResponse editReservation (@PathVariable String reservationID ,
                                                @RequestBody ReservationRequest reservationRequest) throws Exception {
        return reservationService.editReservation(reservationID,reservationRequest);
    }

    @DeleteMapping("/delete/{reservationID}")
    public void delete (@PathVariable String reservationID) throws Exception {
        reservationService.deleteReservation(reservationID);
    }
}
