import React from 'react';
import './mapContainer.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

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
            <p>Ubungo</p>
            <p>P.O.Box 9544</p>
            <p>Dar es Salaam, Tanzania</p>
        </div>
        <h1>Get in Touch</h1>
        <div className="social-icons">
            <a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer">
                <AiOutlineFacebook className="white-icon" />
            </a>
            <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
                <AiOutlineInstagram className="white-icon" />
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
                <AiOutlineLinkedin className="white-icon" />
            </a>
            <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
                <AiOutlineTwitter className="white-icon" />
            </a>
        </div>   
      </div>
    </div>
  );
};

export default mapContainer;
