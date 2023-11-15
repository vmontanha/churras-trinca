import React from 'react'
import { Form, Outlet } from 'react-router-dom'
import Home from './Layout/Home/Home'
import './App.css'

const App = () => {
  return (
    <div className='warp'>
      <Home />
      <div className='container'>
        <Outlet />
      </div>
    </div>
  )
}

export default App