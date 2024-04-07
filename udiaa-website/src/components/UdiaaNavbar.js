import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


import logoImage from "./images/logo.png";


const UdiaaNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
/* Responsive navigation bar */
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="/home">
        <img
          src={logoImage}
          alt="UDIAA logo"
          style={{ width: "150px", height: "auto" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto mx-auto">
            <Nav.Link href ="/home">Home</Nav.Link>
            <Nav.Link href ="/about">About Us</Nav.Link>
            <Nav.Link href ="/events">Events</Nav.Link>
            <Nav.Link href ="/careers">Careers</Nav.Link>
            <Nav.Link href ="/gallery">Gallery</Nav.Link>
            <Nav.Link href ="/contacts">Contact Us</Nav.Link>
      </Nav>
<Nav>
<a href="https://forms.gle/aVhUy7PceTNygHZ5A"><Button className="text-center" variant="success" >Become Member</Button></a>
</Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
};

export default UdiaaNavbar;

/* 
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="logo">
        <img
          src={logoImage}
          alt="UDIAA logo"
          style={{ width: "200px", height: "auto" }}
        />
// Brand.js
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import  Hamburger from '../images/hamburger.png'
import Brand from '../images/logo.png'
import BecomeMemberButton from "../Buttons/BecomeMemberButton";
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
              <BecomeMemberButton/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
*/
