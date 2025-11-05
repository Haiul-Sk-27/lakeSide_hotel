package com.HaiulSkWork.lakeSide_hotel.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BookedRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    @Column(name="check_In")
    private LocalDate checkInDate;
    @Column(name="check_out")
    private LocalDate checkOutDate;
    @Column(name="Guest_FullName")
    private String guestFullName;
    @Column(name="Guest_Email")
    private String guestEmail;
    @Column(name="adults")
    private  int NumOfAdult;
    @Column(name="children")
    private  int NumOfChildren;
    @Column(name="total_guest")
    private int totalNumOfGuest;
    @Column(name="confirmation_Code")
    private String bookingConfirmationCode;

    @ManyToOne(fetch = FetchType.LAZY)

    @JoinColumn(name="room_id")
    private Room room;

    public void calculateTotalNumberOfGuest(){
        this.totalNumOfGuest = this.NumOfAdult + NumOfChildren;
    }

    public void setNumOfAdult(int numOfAdult){
        numOfAdult = numOfAdult;
        calculateTotalNumberOfGuest();
    }

    public void setNumOfChildren(int numOfChildren){
        numOfChildren = numOfChildren;
        calculateTotalNumberOfGuest();
    }

    public BookedRoom(String bookingConfirmationCode){
        this.bookingConfirmationCode = bookingConfirmationCode;
    }
}
