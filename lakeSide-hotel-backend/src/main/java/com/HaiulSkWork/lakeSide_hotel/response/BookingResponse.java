package com.HaiulSkWork.lakeSide_hotel.response;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BookingResponse {


    private Long id;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private String guestFullName;
    private String guestEmail;
    private  int NumOfAdult;
    private  int NumOfChildren;
    private int totalNumOfGuest;
    private String bookingConfirmationCode;

    private RoomResponse room;

    public BookingResponse (Long id,LocalDate checkInDate,LocalDate checkOutDate,String bookingConfirmationCode){
        this.id = id;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.bookingConfirmationCode = bookingConfirmationCode;
    }

}
