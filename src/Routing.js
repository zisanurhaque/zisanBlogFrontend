import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home'
import Dashboard from './Components/Dashboard/Dashboard'
import About from './Components/About/About'
import Portfolio from "./Components/Portfolio/Portfolio"
import Contact from './Components/Contact/Contact'

const Routing = () => {
  return (
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
      </Routes>
  )
}

export default Routing
