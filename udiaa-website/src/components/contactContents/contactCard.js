import React from 'react';
import './contactCard.css';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMessage } from 'react-icons/ai';


const ContactCard = () => {
  return (
    <div className="contact-card">
      <div className="left-container">
        <AiOutlinePhone className="contact-card-icons"/>
        <p>Talk To Us</p>
        <h4>For inquiries or assistance, please feel free to contact us by phone at</h4>
        <p>+(255) 717-444-520</p>
        <p>+(255) 687-671-022</p>
      </div>
      <div className="divider"></div>
      <div className="right-container">
        <AiOutlineMessage className="contact-card-icons"/>
        <p>Have a Chat With Us</p>
        <h4>Have a question or need assistance? Send us a message now! </h4>
        <button><a href="#contact-section" id="chat-button">Chat</a></button>
      </div>
    </div>
  );
};

export default ContactCard;
