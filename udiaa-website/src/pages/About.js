import React, { useEffect } from 'react'; 
import PageBanner from '../components/PageBanner/PageBanner';
import "./style/About.css";
import Footer from "../components/footer/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faLightbulb, faPeopleGroup, faListCheck, faHandshake, faLeaf, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import aboutImage from '../components/images/about.webp';

const About = () => { 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const coreValues = [
    { icon: faUserTie, title: "Professionalism", description: "Maintaining the highest standards of conduct and ethics" },
    { icon: faLightbulb, title: "Innovation", description: "Embracing new ideas and creative solutions" },
    { icon: faPeopleGroup, title: "Teamwork", description: "Collaborating effectively to achieve common goals" },
    { icon: faListCheck, title: "Accountability", description: "Taking responsibility for our actions and decisions" },
    { icon: faLeaf, title: "Sustainability", description: "Building lasting impact for future generations" },
    { icon: faHandshake, title: "Collaboration", description: "Partnering with stakeholders for mutual success" },
  ];

  const membershipBenefits = [
    "Access to exclusive networking events and workshops",
    "Professional development and certification support",
    "Mentorship programs with industry experts",
    "Career guidance and job placement assistance",
    "Discounts on professional training programs",
    "Access to industry publications and resources",
  ];

  return (
    <div className="about-page">
      <PageBanner 
        title="About Us"
        subtitle="Discover our mission, values, and commitment to shaping future internal audit leaders"
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* About Content Section */}
      <section className="about-content-section section animate-on-scroll">
        <div className="container">
          <div className="about-content-grid">
            <div className="about-text-content">
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">We Shape Your Future Today</h2>
              <p>
                UDIAA is partnered with <strong>The Institute of Internal Auditors Tanzania (IIA-T)</strong> 
                and our duty is to connect students with professionals across IIA Tanzania.
              </p>
              <p>
                Our goal is to advocate Internal Audit as a career choice for students and our organization 
                provides a variety of professional development and networking opportunities across 
                University of Dar es Salaam.
              </p>
              <p>
                Founded in 2023, we have grown rapidly to become the leading student-led professional 
                association for aspiring internal auditors in Tanzania.
              </p>
            </div>
            <div className="about-image-wrapper">
              <img src={aboutImage} alt="UDIAA team members" className="about-image" />
              <div className="about-image-badge">
                <span className="badge-label">Established</span>
                <span className="badge-value">2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Core Values</span>
            <h2 className="section-title">What Makes Us Well Organized</h2>
            <p className="section-subtitle">
              These principles guide everything we do and shape our community
            </p>
          </div>
          
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div className="value-card" key={index}>
                <div className="value-icon-wrapper">
                  <FontAwesomeIcon icon={value.icon} className="value-icon" />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="benefits-section section animate-on-scroll">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefits-content">
              <span className="section-label">Membership</span>
              <h2 className="section-title">Benefits of Joining UDIAA</h2>
              <p className="benefits-intro">
                As a UDIAA member, you gain access to exclusive resources and opportunities 
                designed to accelerate your professional growth.
              </p>
              
              <ul className="benefits-list">
                {membershipBenefits.map((benefit, index) => (
                  <li key={index}>
                    <FontAwesomeIcon icon={faCheckCircle} className="benefit-icon" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://forms.gle/aVhUy7PceTNygHZ5A" 
                target="_blank" 
                rel="noopener noreferrer"
                className="benefits-cta"
              >
                Become a Member
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </a>
            </div>
            
            <div className="benefits-visual">
              <div className="benefits-card">
                <div className="benefits-card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3>500+</h3>
                <p>Active Members</p>
              </div>
              <div className="benefits-card">
                <div className="benefits-card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <h3>50+</h3>
                <p>Events Hosted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  ); 
}; 

export default About;
