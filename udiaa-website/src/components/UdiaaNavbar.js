import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logoImage from "./images/logo.png";
import "./navbar/Navbar.css";

const UdiaaNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/events", label: "Events" },
    { path: "/careers", label: "Careers" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contacts", label: "Contact" },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar-container">
        <NavLink to="/home" className="navbar-logo">
          <img src={logoImage} alt="UDIAA Logo" />
        </NavLink>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          
          <a
            href="https://forms.gle/aVhUy7PceTNygHZ5A"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta mobile-only"
          >
            Join Us
          </a>
        </div>

        <a
          href="https://forms.gle/aVhUy7PceTNygHZ5A"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-cta desktop-only"
        >
          Become a Member
        </a>

        <button
          className={`navbar-toggle ${isOpen ? "active" : ""}`}
          onClick={toggleNavbar}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isOpen && <div className="navbar-backdrop" onClick={() => setIsOpen(false)} />}
    </header>
  );
};

export default UdiaaNavbar;
