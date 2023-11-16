import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './Layout/Home/Home'
import './App.css'

const App = () => {
  return (
    <div className='warp'>
      <Home />
      <Outlet />
    </div>
  )
}

export default App