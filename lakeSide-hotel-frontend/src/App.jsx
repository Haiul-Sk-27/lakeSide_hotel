import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddRoom from './components/room/AddRoom'
import ExistingRooms from './components/room/ExistingRooms'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from './components/home/Home'
import EditingRoom from './components/room/EditingRoom'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/existing-rooms" element={<ExistingRooms />} />
            <Route path="/edit-room/:roomId" element={<EditingRoom />} />
            <Route path='/add-room' element={<AddRoom />} />
          </Routes>
        </Router>
        <Footer/>
      </main>
    </>
  )
}

export default App
