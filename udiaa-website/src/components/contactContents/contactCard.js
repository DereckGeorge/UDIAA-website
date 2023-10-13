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
        <h4>This is a paragraph about the content in the first place, Where you can never imagine its finally happening </h4>
        <p>+(255) 748-281-701</p>
        <p>+(255) 624-196-910</p>
      </div>
      <div className="divider"></div>
      <div className="right-container">
        <AiOutlineMessage className="contact-card-icons"/>
        <p>Have a Chat With Us</p>
        <h4>This is a paragraph about the content in the first place, Where you can never imagine its finally happening </h4>
        <button>Send</button>
      </div>
    </div>
  );
};

export default ContactCard;
