import React, { useEffect, useState } from "react";
import PageBanner from "../components/PageBanner/PageBanner";
import Footer from "../components/footer/footer";
import { AiOutlineArrowRight, AiOutlineWhatsApp, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";
import "./style/Contacts.css";

const Contacts = () => {
  const [openFaq, setOpenFaq] = useState(null);

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

  const contactMethods = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: "Visit Us",
      details: ["University of Dar es Salaam", "Dar es Salaam, Tanzania"],
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: "Email Us",
      details: ["info@udiaa.or.tz"],
      link: "mailto:info@udiaa.or.tz",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: "Call Us",
      details: ["+255 717-444-520"],
      link: "tel:+255717444520",
    },
  ];

  const faqs = [
    {
      question: "How do I become a member of UDIAA?",
      answer: "You can become a member by filling out our online membership form. Click the 'Become a Member' button on our website and complete the registration process."
    },
    {
      question: "What are the membership benefits?",
      answer: "Members enjoy access to networking events, professional development workshops, mentorship programs, career guidance, and exclusive industry resources."
    },
    {
      question: "Who can join UDIAA?",
      answer: "UDIAA is open to all students at the University of Dar es Salaam who are interested in internal audit and related fields. Academic staff and industry professionals can also participate."
    },
    {
      question: "How often are events organized?",
      answer: "We organize various events throughout the academic year, including workshops, seminars, networking sessions, and career fairs. Check our Events page for upcoming activities."
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    window.location.href = `mailto:info@udiaa.or.tz?subject=${subject || 'Contact from ' + name}&body=${message}%0A%0AFrom: ${name}%0AEmail: ${email}`;
  };

  return (
    <div className="contacts-page">
      <PageBanner 
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch with our team."
        breadcrumbs={[{ label: "Contact" }]}
      />

      {/* Contact Cards */}
      <section className="contact-cards-section section animate-on-scroll">
        <div className="container">
          <div className="contact-cards-grid">
            {contactMethods.map((method, index) => (
              <div className="contact-method-card" key={index}>
                <div className="contact-method-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                {method.details.map((detail, i) => (
                  method.link ? (
                    <a key={i} href={method.link} className="contact-method-detail">{detail}</a>
                  ) : (
                    <p key={i} className="contact-method-detail">{detail}</p>
                  )
                ))}
              </div>
            ))}
          </div>
          
          {/* Social Links */}
          <div className="social-section">
            <p>Connect with us on social media</p>
            <div className="social-links">
              <a href="https://api.whatsapp.com/send?phone=255717444520" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <AiOutlineWhatsApp />
              </a>
              <a href="https://www.linkedin.com/company/udsm-internal-audit-association/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <AiOutlineLinkedin />
              </a>
              <a href="https://www.instagram.com/udiaa_udsm/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Form Section */}
      <section className="contact-main-section section animate-on-scroll">
        <div className="container">
          <div className="contact-main-grid">
            {/* Map */}
            <div className="contact-map">
              <h3>Where To Find Us</h3>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.6629851934785!2d39.20537291527685!3d-6.779186867952553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4eba12cc5c91%3A0x9b6b51f09cb9cd54!2sUniversity%20of%20Dar%20es%20Salaam!5e0!3m2!1sen!2stz!4v1647012345678!5m2!1sen!2stz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="UDIAA Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h3>Send Us a Message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" required placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required placeholder="your@email.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="How can we help?" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required placeholder="Your message..."></textarea>
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

      {/* FAQ Section */}
      <section className="faq-section section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Find answers to common questions about UDIAA</p>
          </div>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                className={`faq-item ${openFaq === index ? 'open' : ''}`} 
                key={index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="faq-question">
                  <h4>{faq.question}</h4>
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className="faq-icon"
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
