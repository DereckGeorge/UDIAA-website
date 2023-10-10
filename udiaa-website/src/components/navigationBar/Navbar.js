// Brand.js
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import  Hamburger from '../images/hamburger.png'
import Brand from '../images/logo.png'
import './Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
        <img src={Brand} alt="Brand Logo" style={{ maxWidth: '200px', maxHeight: 'auto' }}/>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <img src={Hamburger} alt="Hamburger" style={{ maxWidth: '20px', maxHeight: 'auto' }}/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/Events">Events</NavLink>
            </li>
            <li>
              <NavLink to="/Careers">Careers</NavLink>
            </li>
            <li>
              <NavLink to="/Gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/Contacts">Contact Us</NavLink>
            </li>
            <li>
              <button className="member-button">Become Member</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar