import React from 'react'
import Home from "./components/Home.jsx"
import Navbar from './components/Navbar.jsx'
import { useData } from './context/Context.jsx'
import { Routes, Route } from'react-router-dom'
import Playingvedio from './components/Playingvedio.jsx'
import Search from './components/Search.jsx'

const App = () => {
  const {loading,data} = useData()
  console.log(loading)
  console.log(data)
  return (
   
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/vedio/:id" element={<Playingvedio />} />
        <Route path="/search/:searchQuery" element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
