import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../navigationBar/Navbar.css";
import logoImage from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="logo">
        <img
          src={logoImage}
          alt="UDIAA logo"
          style={{ width: "200px", height: "auto" }}
        />
      </div>

      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li className="nav-item">
            <Link to="/home">Home</Link> 
          </li>
          <li className="nav-item">
            <Link to="/about">About Us</Link> 
          </li>
          <li className="nav-item">
            <Link to="/events">Events</Link> 
          </li>
          <li className="nav-item">
            <Link to="/careers">Careers</Link> 
          </li>
          <li className="nav-item">
            <Link to="/gallery">Gallery</Link> 
          </li>
          <li className="nav-item">
            <Link to="/contacts">Contact Us</Link> 
          </li>
        </ul>
      </div>

      <div className="hamburger" onClick={toggleNavbar}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      <button className="member-button">Become a Member</button>
      

    </nav>
  );
};

export default Navbar;
