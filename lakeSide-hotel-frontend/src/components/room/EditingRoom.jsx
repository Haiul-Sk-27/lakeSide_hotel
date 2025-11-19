import React, { useEffect, useState } from 'react'
import { getRoomById, updateRoom } from '../utils/ApiFunctions';
import { useParams } from 'react-router-dom';
import { RoomTypesSelector } from '../common/RoomTypesSelector';

const EditingRoom = () => {

  const [room, setRoom] = useState({
    photo: null,
    roomType: "",
    roomPrice: ""
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const { roomId } = useParams();

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const roomData = await getRoomById(roomId);
        setRoom(roomData);
        if (roomData.photo) {
          setImagePreview(`data:image/jpeg;base64,${roomData.photo}`);
        }

      } catch (error) {
        console.log(error);
      }
    };

    fetchRoom();
  }, [roomId]);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setRoom({ ...room, photo: selectedFile });
    setImagePreview(URL.createObjectURL(selectedFile));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const success = await updateRoom(roomId, room);

    if (success) {
      setSuccessMessage("Room updated successfully");
      setErrorMessage("");
    }
  } catch (error) {
    setErrorMessage(error.message);
  }
};


  return (
    <section className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <h2 className="mt-5 mb-5">Edit Room</h2>

          <form onSubmit={handleSubmit}>
            {/* Room Type */}
            <div className="mb-3">
              <label htmlFor="roomType" className="mb-3">Room Type</label>
              <RoomTypesSelector
                handleRoomInputChange={handleInputChange}
                newRoom={room}
              />
            </div>

            {/* Room Price */}
            <div className="mb-3">
              <label htmlFor="roomPrice" className="mb-3">Room Price</label>
              <input
                className="form-control"
                required
                id="roomPrice"
                type="number"
                name="roomPrice"
                value={room.roomPrice}
                onChange={handleInputChange}
              />
            </div>

            {/* Room Photo */}
            <div className="mb-3">
              <label htmlFor="photo" className="mb-3">Room Photo</label>
              <input
                id="photo"
                name="photo"
                type="file"
                className="form-control"
                onChange={handleImageChange}
              />

              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Room Preview"
                  style={{ maxWidth: "400px", maxHeight: "400px" }}
                  className="mb-3 mt-3"
                />
              )}
            </div>

            <div className="d-grid d-md-flex mt-2">
              <button className="btn btn-outline-primary ml-5">
                Edit Room
              </button>
            </div>

            {successMessage && (
              <div className="alert alert-success mt-3">{successMessage}</div>
            )}
            {errorMessage && (
              <div className="alert alert-danger mt-3">{errorMessage}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditingRoom;