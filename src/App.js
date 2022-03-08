import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
import Routing from './Routing'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routing/>
      </BrowserRouter>
    </div>
  )
}

export default App
