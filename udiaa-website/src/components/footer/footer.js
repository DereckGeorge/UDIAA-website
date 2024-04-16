import React from 'react';
import './footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Element } from 'react-scroll';
import logo from '../images/logo.png';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
    return (
        <Container fluid className='pt-3 pb-3'>
            
                <div className="footer-top">
                    <h1>Visit Us</h1>
                    <p>Dar es Salaam</p>
                    <p>+255 717-444-520</p>
                    <p>info@udiaa.or.tz</p>
                    <div className="footer-icons">
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <AiOutlineTwitter className="footer-icons"/>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <AiOutlineLinkedin className="footer-icons"/>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <AiOutlineInstagram className="footer-icons"/>
                        </a>
                    </div>
                    <div className="quick-links">
                        <a href='/home'><p>Home</p></a>
                        <a href='/aboutus'><p>About Us</p></a>
                        <a href='/events'><p>Events</p></a>
                    </div>
                </div>
            
            <Row>
                <div className="footer-bottom">
                  <p>&copy; 2024 UDIAA. All rights reserved.</p>
                </div>
            </Row>
            
        </Container>
    );
}

export default Footer;
