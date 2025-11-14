import React, { useState } from 'react'

export const RoomFilter = ({data,serFiteredData}) => {
    const [filter,setFilter] = useState("")
    const handleSelectChenge = (e)=>{
        const selectRoomType = e.target.value

        setFilter(selectRoomType)
        const filteredRooms = data.filter((room)=>room.roomtype.toLowerCase().includes(selectRoomType.toLowerCase()))
        setFilteredData(filteredRooms)
    }

    const clearFilter = () => {
        setFilter("")
        setFilteredData(data)
    }

    const roomTypes = ["",...new Set((room) => room.roomtype)]
  return (
    <div className='input-group mb-3'>
        <span className='input-group-text'id="room-type-filter">Filter room by types</span>
        <select className='form-select'
        value={filter}
        onChange={handleSelectChenge}>

            <option value={""}>select a room type to filter...</option>
            {
                roomTypes.map((type,index)=>(
                    <option key={index} value={String(type)}>{String(type)}</option>
                ))
            }

        </select>

        <button className='btn btn-hotel' type='button' onClick={clearFilter}>clear Filter</button>
    </div>
  )
}
