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
        <h1>We need you at our community</h1>
        <p>A paragraph to encourage and attract the new users to join the Association</p>
        <div className='middle-button'>
        <a href="https://forms.gle/aVhUy7PceTNygHZ5A"><Button className="text-center button" variant="success" >Become Member</Button></a>
      </div>
    </div>
  );
};

export default AboutContainer;
