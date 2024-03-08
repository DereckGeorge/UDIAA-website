import React from 'react';
import './Container.css';
import { Container } from 'react-bootstrap';
import content2 from '../images/content2.jpg';
import BecomeMemberButton from "../Buttons/BecomeMemberButton";

const AboutContainer = () => {
 ;
  return (
    <Container fluid className="d-flex justify-content-center bg-image align-items-center" >

        <div className='middle-button'>
        <BecomeMemberButton/>

      </div>
    </Container>
  );
};

export default AboutContainer;
