package com.HaiulSkWork.lakeSide_hotel.controller;

import com.HaiulSkWork.lakeSide_hotel.exception.PhotoRetrivalException;
import com.HaiulSkWork.lakeSide_hotel.exception.ResourceNotFoundException;
import com.HaiulSkWork.lakeSide_hotel.model.BookedRoom;
import com.HaiulSkWork.lakeSide_hotel.model.Room;
import com.HaiulSkWork.lakeSide_hotel.response.BookingResponse;
import com.HaiulSkWork.lakeSide_hotel.response.RoomResponse;
import com.HaiulSkWork.lakeSide_hotel.service.BookingService;
import com.HaiulSkWork.lakeSide_hotel.service.IRoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.apache.commons.codec.binary.Base64;
import org.springframework.web.multipart.MultipartFile;


import java.math.BigDecimal;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@RequiredArgsConstructor
@RequestMapping("/rooms")
public class RoomController {

    private final IRoomService roomService;
    private final BookingService bookingsService;

    @PostMapping("/add/new-room")
    public ResponseEntity<RoomResponse> addNewRoom(
            @RequestParam("photo") MultipartFile photo,
            @RequestParam("roomType") String roomType,
            @RequestParam("roomPrice") BigDecimal roomPrice) throws SQLException {
            Room savedRoom = roomService.addNewRoom(photo,roomType,roomPrice);

            RoomResponse response = new RoomResponse(savedRoom.getId(),savedRoom.getRoomType(),savedRoom.getRoomPrice());
            return ResponseEntity.ok(response);
    }
    @GetMapping("/all")
    public List<String> getRooms(){
        return roomService.getAllRoomTypes();
    }

    @GetMapping("/room-types")
    public ResponseEntity<List<RoomResponse>> getAllRooms() throws SQLException, ResourceNotFoundException {
        List<Room> rooms = roomService.getAllRooms();
        List<RoomResponse> roomResponses = new ArrayList<>();

        for (Room room : rooms) {
            byte[] photoBytes = roomService.getRoomPhotoByRoomId(room.getId());
            String base64Photo = null;

            if (photoBytes != null && photoBytes.length > 0) {
                base64Photo = Base64.encodeBase64String(photoBytes);
            }

            RoomResponse roomResponse = getRoomResponse(room);
            roomResponse.setPhoto(base64Photo);
            roomResponses.add(roomResponse);
        }

        return ResponseEntity.ok(roomResponses);
    }

    private RoomResponse getRoomResponse(Room room) {
        List<BookedRoom> bookings = getAllBookingsByRoomId(room.getId());

        List<BookingResponse> bookingInfo = bookings.stream()
                .map(booking -> new BookingResponse(
                        booking.getBookingId(),
                        booking.getCheckInDate(),
                        booking.getCheckOutDate(),
                        booking.getBookingConfirmationCode()
                ))
                .collect(Collectors.toList());

        byte[] photoBytes = null;
        Blob photoBlob = room.getPhoto();

        if (photoBlob != null) {
            try {
                photoBytes = photoBlob.getBytes(1, (int) photoBlob.length());
            } catch (SQLException e) {
                throw new PhotoRetrivalException("Error retrieving photo", e);
            }
        }

        return new RoomResponse(
                        room.getId(),
                        room.getRoomType(),
                        room.getRoomPrice(),
                        room.getIsBooked(),
                photoBytes,
                bookingInfo
                );
    }


    private List<BookedRoom> getAllBookingsByRoomId(Long roomId) {
        return bookingsService.getAllBookingsByRoomId(roomId);
    }
}
