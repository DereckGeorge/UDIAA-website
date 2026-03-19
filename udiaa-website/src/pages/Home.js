import React, { useEffect, useRef } from "react";
import "./style/Home.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faBullseye, faHandshake, faChartLine, faUsers, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineArrowRight } from "react-icons/ai";
import aboutImage from "../components/images/about.webp";
import iaaLogo from "../components/images/iaalogo.png";

const Home = () => {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: faHandshake,
      title: "Professional Network",
      description: "Connect with industry professionals, academic staff, and like-minded students."
    },
    {
      icon: faChartLine,
      title: "Career Development",
      description: "Access workshops, seminars, and mentorship programs to advance your career."
    },
    {
      icon: faGraduationCap,
      title: "Learning Opportunities",
      description: "Participate in training sessions and certification preparation programs."
    }
  ];

  const values = [
    { icon: faLightbulb, title: "Innovation", description: "Embracing new ideas and approaches in internal audit practice." },
    { icon: faBullseye, title: "Excellence", description: "Striving for the highest standards in everything we do." },
    { icon: faUsers, title: "Collaboration", description: "Working together to achieve common goals and shared success." }
  ];

  return (
    <div className="home-page">
      <Header />
      
      {/* About Section */}
      <section className="about-section section animate-on-scroll">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrapper">
              <div className="about-image-container">
                <img src={aboutImage} alt="UDIAA members" className="about-image" />
                <div className="about-image-accent"></div>
              </div>
              <div className="about-badge">
                <span className="badge-number">Est.</span>
                <span className="badge-year">2023</span>
              </div>
            </div>
            
            <div className="about-content">
              <span className="section-label">About Us</span>
              <h2 className="section-title">Building the Future of Internal Audit Excellence</h2>
              <p className="about-text">
                UDIAA is a student-led Professional Association that assembles students, 
                academic staff, and interested stakeholders at the University level under 
                a common umbrella. We focus on helping students build their network and 
                future careers in internal audit.
              </p>
              <p className="about-text">
                Inaugurated in 2023, we have quickly grown to become a leading voice for 
                internal audit students, providing valuable resources, networking opportunities, 
                and professional development programs.
              </p>
              <a href="/about" className="about-link">
                Learn more about us
                <AiOutlineArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission-section section animate-on-scroll">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vm-card vision-card">
              <div className="vm-icon-wrapper">
                <FontAwesomeIcon icon={faLightbulb} className="vm-icon" />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading Internal Audit student association in advocating 
                the Internal audit profession and its importance in organizational governance.
              </p>
            </div>
            
            <div className="vm-card mission-card">
              <div className="vm-icon-wrapper">
                <FontAwesomeIcon icon={faBullseye} className="vm-icon" />
              </div>
              <h3>Our Mission</h3>
              <p>
                To advocate, improve and strengthen internal audit as a career of choice 
                among student members through various association activities and professional development programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Why Join Section */}
      <section className="features-section section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why Join UDIAA</span>
            <h2 className="section-title">Unlock Your Professional Potential</h2>
            <p className="section-subtitle">
              Discover the benefits of being part of our growing community
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon-wrapper">
                  <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Partners</span>
            <h2 className="section-title">Trusted By Industry Leaders</h2>
            <p className="section-subtitle">
              We collaborate with renowned organizations to provide the best opportunities
            </p>
          </div>
          
          <div className="partners-logo-grid">
            <div className="partner-logo">
              <img src={iaaLogo} alt="IAA Logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What Drives Us Forward</h2>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-card" key={index}>
                <div className="value-number">{String(index + 1).padStart(2, '0')}</div>
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

      {/* CTA Section */}
      <section className="cta-section section animate-on-scroll">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Ready to Shape Your Future?</h2>
              <p>
                Join our community of aspiring internal auditors and take the first 
                step towards a successful career in internal audit.
              </p>
              <div className="cta-actions">
                <a href="https://forms.gle/aVhUy7PceTNygHZ5A" target="_blank" rel="noopener noreferrer" className="cta-btn primary">
                  Become a Member
                  <AiOutlineArrowRight />
                </a>
                <a href="/contacts" className="cta-btn secondary">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="cta-decoration">
              <div className="cta-circle"></div>
              <div className="cta-circle small"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section section animate-on-scroll">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="section-label">Get In Touch</span>
              <h2 className="section-title">Let's Start a Conversation</h2>
              <p>
                Have questions about membership, events, or partnership opportunities? 
                We'd love to hear from you.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>Dar es Salaam, Tanzania</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>info@udiaa.or.tz</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>+255 717-444-520</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                window.location.href = `mailto:info@udiaa.or.tz?subject=Contact from ${name}&body=${message}%0A%0AFrom: ${email}`;
              }}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required placeholder="John Doe" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required placeholder="john@example.com" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" required placeholder="How can we help you?"></textarea>
                </div>
                
                <button type="submit" className="form-submit">
                  Send Message
                  <AiOutlineArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
