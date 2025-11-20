import React, { useEffect, useState } from 'react'
import RoomCard from './RoomCard';

const Room = () => {
    const [data,setData] = useState([]);
    const[error,setError] = useState(null);
    const[isLoading,setIsLoading] = useState(false);
    const[currentPage,setCurrnetPage] = useState(1);
    const[roomsPerPage] = useState(6);
    const[filteredData,setFilteredData] = useState([id:""]);

    useEffect(()=>{
        setIsLoading(true)
        getAllRooms().then((data)=>{
            setData(data)
            setFilteredData(data)
            setIsLoading(false)
        }).catch((error)=>{
            setError(error.message)
            setIsLoading(false)
        })
    },[])

    if(isLoading){
        return <div>Loading rooms....</div>
    }

    if(error){
        return <div className='text-danger'>Error:{error}</div>
    }

    const hadlePageChange = (pageNumber) =>{
        setCurrnetPage(pageNumber);
    }

    const totalPages = Math.ceil(filteredData.length/roomsPerPage)

    const renderRooms = ()=>{
        const startIndex = (currentPage-1) * roomsPerPage;
        const endIndex = startIndex + roomsPerPage;
        return filteredData
        .slice(startIndex,endIndex)
        .map((room)=><RoomCard key={room.id} room={room}/>)
    }
  return (
    <div>Room</div>
  )
}

export default Room