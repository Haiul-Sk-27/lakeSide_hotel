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

        const response = await api.get("/rooms/room-types")
        console.log("rooms response.", response)
        return response.data;

    } catch (error) {
        throw new Error("Error fetching room types")
    }
}