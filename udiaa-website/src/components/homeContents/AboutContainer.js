import React from 'react';
import './Container.css';
import { Container } from 'react-bootstrap';
import content2 from '../images/content2.jpg';
import BecomeMemberButton from "../Buttons/BecomeMemberButton";
import Button from 'react-bootstrap/Button';
const AboutContainer = () => {
 ;
  return (
    <div fluid className="aboutContainer">
        <h1 >We need you at our community</h1>
        <p>Join us in fostering a vibrant community where new members are celebrated and valued. Experience the power of connection, growth, and opportunity. Together, let's build a brighter future. Join UDIAA today!</p>
        <div className='middle-button'>
        <a href="https://forms.gle/aVhUy7PceTNygHZ5A"><BecomeMemberButton/></a>
      </div>
    </div>
  );
};

export default AboutContainer;
