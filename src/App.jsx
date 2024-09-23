import React from 'react'
import Home from "./components/Home.jsx"
import Navbar from './components/Navbar.jsx'
import { useData } from './context/Context.jsx'
import { Routes, Route } from'react-router-dom'
import Playingvedio from './components/Playingvedio.jsx'
import Search from './components/Search.jsx'
import Loder from './components/loder/Loder.jsx'

const App = () => {
  const {loading} = useData()
  return (
   
    <div className=''>
      {loading && <Loder/>}
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/video/:id" element={<Playingvedio />} />
        <Route path="/search/:searchQuery" element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
