import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='Navbar'>
      <Link to="/">MERN STACK</Link>
      <div className='Navbar_links'>
        <Link to="login">login</Link>
        <Link to="regester">regester</Link>
      </div>
    </header>
  )
}

export default Navbar
