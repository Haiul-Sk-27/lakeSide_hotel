import React, { useEffect, useState } from 'react'

const RoomCarousel = () => {
    const [rooms,setRooms] = useState([]);
    const [errorMessage,setErrorMessage] = useState("");
    const [isLoading,setIsLoading] = useState(false);

    useEffect(() =>{
        setIsLoading(true);
        getAllRooms().then((data)=>{
            setRooms(data);
            setIsLoading(false);
        }).catch((error)=>{
            setErrorMessage(error.message);
            setIsLoading(false)
        })
    },[])
  return (
    <div>RoomCarousel</div>
  )
}

export default RoomCarousel