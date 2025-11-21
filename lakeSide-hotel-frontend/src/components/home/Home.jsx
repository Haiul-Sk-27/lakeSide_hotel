import React from 'react'
import MainHeader from '../layout/MainHeader'
import HotelService from '../common/HotelService'
import Parallax from '../common/Parallax'

export const Home = () => {
  return (
   <section>
    <MainHeader/>
    <section className='container'>
      <HotelService/>
      <Parallax/>
    </section>
   </section>
  )
}
