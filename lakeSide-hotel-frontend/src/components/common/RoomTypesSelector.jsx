import React, { useEffect, useState } from "react";
import { getRoomTypes } from "../utils/ApiFunctions";

export const RoomTypesSelector = ({ handleRoomInputChange, newRoom }) => {
  const [roomTypes, setRoomTypes] = useState([]);
  const [showNewRoomTypesInput, setShowNewRoomTypesInput] = useState(false);
  const [newRoomType, setNewRoomType] = useState("");

  useEffect(() => {
    const fetchRoomTypes = async () => {
      try {
        const data = await getRoomTypes();
        // Ensure all items have the correct shape
        if (Array.isArray(data)) {
          const normalized = data.map((type) =>
            typeof type === "string" ? { roomType: type } : type
          );
          setRoomTypes(normalized);
        }
      } catch (error) {
        console.error("Error fetching room types:", error);
      }
    };
    fetchRoomTypes();
  }, []);

  const handleLocalNewRoomTypeInputChange = (e) => {
    setNewRoomType(e.target.value);
  };

  const handleAddNewRoomType = () => {
    if (
      newRoomType.trim() !== "" &&
      !roomTypes.some((t) => t.roomType === newRoomType)
    ) {
      setRoomTypes((prev) => [...prev, { roomType: newRoomType }]);
      setShowNewRoomTypesInput(false);
      setNewRoomType("");

      handleRoomInputChange({
        target: { name: "roomType", value: newRoomType },
      });
    }
  };

  return (
    <div>
      <select
        name="roomType"
        id="roomType"
        value={newRoom.roomType}
        onChange={(e) => {
          if (e.target.value === "Add New") {
            setShowNewRoomTypesInput(true);
          } else {
            handleRoomInputChange(e);
          }
        }}
        className="form-select"
      >
        <option value="">Select a room type</option>
        {roomTypes.map((type,index) => (
          <option key={index} value={type.roomType}>
            {type.roomType}
          </option>
        ))}
        <option value="Add New">➕ Add New</option>
      </select>

      {showNewRoomTypesInput && (
        <div className="input-group mt-2 fade show">
          <input
            className="form-control"
            type="text"
            placeholder="Enter a new room type"
            value={newRoomType}
            onChange={handleLocalNewRoomTypeInputChange}
          />
          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={handleAddNewRoomType}
            disabled={
              newRoomType.trim() === "" ||
              roomTypes.some((t) => t.roomType === newRoomType)
            }
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
};
