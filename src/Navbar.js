import React from 'react'
import logo from './images/jabil-logo.jpg'
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate()
    function handleDataClicked() {
        navigate('/data')
    }
  return (
      <div className='whole-nav'>
    <div className='navbar-container'>
        <img className='logo' src={logo} alt='logo' />
        <h2>O-RAN M-PLANE CLIENT SIMULATOR</h2>
        <p>Excel</p>
        <p>Yang</p>
        <p>Ru</p>
    </div>
    <div className='under-nav'>
        <p>Overview</p>
        <p onClick={handleDataClicked}>Data Models</p>
        <p>RU Connection</p>
        <p>Active Scenerios & Results</p>
    </div>
      </div>
  )
}

export default Navbar