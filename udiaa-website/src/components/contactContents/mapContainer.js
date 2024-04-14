import React from 'react';
import './mapContainer.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const mapContainer = () => {
  return (
    <div className="content1-container">
      <div className="left-side">
        <iframe 
            width="100%" 
            height={350} 
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.334570119163!2d39.2331264!3d-6.8222976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3AYOUR_INVESTMATTER!2sINVESTMATTER!5e0!3m2!1sen!2sus!4vYOUR_EMBED_API_KEY'
            allowFullScreen>
        </iframe>
      </div>
      <div className="right-side">
        <h1>Headquarters</h1>
        <div className="contacts-Details">
            <h4>UDSM UDBS</h4>
            <h4>P.O.Box 9544</h4>
            <h4>Dar es Salaam</h4>
        </div>
        <h1>Get in Touch</h1>
        <div className="social-icons">
            <a href="https://api.whatsapp.com/send?phone=255717444520" target="_blank" rel="noopener noreferrer">
                <AiOutlineWhatsApp className="white-icon" />
            </a>
            <a href="https://www.instagram.com/udiaa_udsm/" target="_blank" rel="noopener noreferrer">
                <AiOutlineInstagram className="white-icon" />
            </a>
            <a href="https://www.linkedin.com/company/udsm-internal-audit-association/" target="_blank" rel="noopener noreferrer">
                <AiOutlineLinkedin className="white-icon" />
            </a>
        </div>   
      </div>
    </div>
  );
};

export default mapContainer;
