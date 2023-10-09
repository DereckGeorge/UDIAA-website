import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from "react-router-dom";
// Import Link from react-router-dom
import "./Navbar.css";
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
<Button className="text-center" variant="success">Become Member</Button>
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
*/