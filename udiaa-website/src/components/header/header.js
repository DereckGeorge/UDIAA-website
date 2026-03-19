import React, { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import './header.css';
import bannerImage from '../images/thebanner.webp';

const Header = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLearnMore = () => {
    navigate("/about");
  };

  const handleJoinUs = () => {
    window.open("https://forms.gle/aVhUy7PceTNygHZ5A", "_blank");
  };

  const stats = [
    { value: "500+", label: "Active Members" },
    { value: "50+", label: "Events Hosted" },
    { value: "2023", label: "Established" },
  ];

  return (
    <section className="hero" ref={heroRef}>
      {/* Background Image with Overlay */}
      <div className="hero-bg">
        <img src={bannerImage} alt="" aria-hidden="true" />
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            University of Dar es Salaam
          </div>
          
          <h1 className="hero-title">
            Shaping Future
            <span className="hero-title-accent"> Internal Audit </span>
            Leaders
          </h1>
          
          <p className="hero-description">
            Join Tanzania's premier student-led professional association dedicated to 
            building networks, advancing careers, and promoting excellence in internal audit.
          </p>

          <div className="hero-actions">
            <button className="hero-btn primary" onClick={handleJoinUs}>
              Become a Member
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </button>
            <button className="hero-btn secondary" onClick={handleLearnMore}>
              Learn More
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Header;
