import React from 'react';
import './Container.css';
import BecomeMemberButton from "../Buttons/BecomeMemberButton";
import Button from 'react-bootstrap/Button';
const AboutContainer = () => {
 ;
  return (
    <div fluid className="aboutContainer">
        <h1>We need you at our community</h1>
        <p>Join our internal audit association to connect with like-minded professionals, access valuable resources, and advance your career in auditing.</p>
        <div className='middle-button'>
        <a href="https://forms.gle/aVhUy7PceTNygHZ5A"><BecomeMemberButton/></a>
      </div>
    </div>
  );
};

export default AboutContainer;
