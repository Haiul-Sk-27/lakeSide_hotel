package com.HaiulSkWork.lakeSide_hotel.exception;

import java.sql.SQLException;

public class PhotoRetrivalException extends RuntimeException {
    public PhotoRetrivalException(String message, SQLException e) {
        super(message);
    }
}
