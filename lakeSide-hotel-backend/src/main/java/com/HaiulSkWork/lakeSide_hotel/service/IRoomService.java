package com.HaiulSkWork.lakeSide_hotel.service;

import com.HaiulSkWork.lakeSide_hotel.exception.ResourceNotFoundException;
import com.HaiulSkWork.lakeSide_hotel.model.Room;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

public interface IRoomService {
    Room addNewRoom(MultipartFile photo, String roomType, BigDecimal roomPrice) throws SQLException;

    List<String> getAllRoomTypes();

    List<Room> getAllRooms();

    byte[] getRoomPhotoByRoomId(Long roomId) throws SQLException, ResourceNotFoundException;

    void deleteRoom(Long roomId);

    Room updateRoom(Long roomId, String roomType,BigDecimal roomPrice, byte[] photoBytes) throws ResourceNotFoundException;

    Optional<Room> getRoomById(Long roomId);
}
