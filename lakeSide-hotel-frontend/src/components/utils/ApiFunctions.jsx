import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080"
})


/*  This function add a new room  room to the dataBase*/
export async function addRoom(photo, roomType, roomPrice) {
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("roomType", roomType);
    formData.append("roomPrice", roomPrice);

    const response = await api.post("/rooms/add/new-room", formData)
    if (response.status >= 200 && response.status < 300) {
        return true;
    } else {
        console.error("Unexpected status:", response.status);
        return false;
    }
}

/*This  function get all room types from these hotel*/
export async function getRoomTypes() {
    try {

        const respoanse = await api.get("/rooms/room-types")
        console.log("rooms response.", respoanse)
        return respoanse.data;

    } catch (error) {
        throw new Error("Error fetching room types")
    }
}


//This function get all rooms from the database
export async function getAllRooms(){
    try{
        const result = await api.get("/rooms/all-rooms")
        return result.data
        
    }catch(error){
        throw new error("Error not fetching room")

    }
}

/*This function deletes a room by the id */
export async function deleteRoom(roomId){
    try{
        const result = await api.delete(`/rooms/delete/room/${roomId}`)
        return result.data
    }catch(error){
        throw new Error(`Error deleteing room ${error.message}`)
    }
}

//This function update a room
export async function updateRoom(roomId,roomData){
    const formData = new FormData();
    formData.append("roomType",roomData.roomType);
    formData.append("roomPrice",roomData.roomPrice);
    formData.append("roomPhoto",roomData.roomPhoto);
    formData.append("roomType",roomData.roomType);

    const response = await api.put(`rooms/apdate/${roomId}`)
    return response;
}

//This function gets a room by id
export async function getRoomById(roomId){
    try{
        const result = await api.get(`/rooms/room/${roomId}`);

        return result.data;

    }catch(error){
        throw new Error(`Error fetching room ${error.message}`)
    }
}