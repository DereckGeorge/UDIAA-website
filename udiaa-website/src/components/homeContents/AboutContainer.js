import React from 'react';
import './Container.css';
import { Container } from 'react-bootstrap';
import content2 from '../images/content2.jpg';
import BecomeMemberButton from "../Buttons/BecomeMemberButton";
import Button from 'react-bootstrap/Button';
const AboutContainer = () => {
 ;
  return (
    <Container fluid className="d-flex justify-content-center bg-image align-items-center" >

        <div className='middle-button'>
        <a href="https://forms.gle/aVhUy7PceTNygHZ5A"><Button className="text-center" variant="success" >Become Member</Button></a>

      </div>
    </Container>
  );
};

export default AboutContainer;
