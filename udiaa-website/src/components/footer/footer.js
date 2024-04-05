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
            <Row>
                <Col lg={6} className='left-side-footer'>
                    <div>
                    <div>
                        <h1>Headquarters</h1>
                        <div className="address-Details">
                            <p>Ubungo</p>
                            <p>P.O.Box 9544</p>
                            <p>Dar es Salaam, Tanzania</p>
                        </div>
                    </div>
                    <div>
                        <h1>Site Links</h1>
                        <div className="site-links">
                            <a href='/home'><p>Home</p></a>
                            <a href='/aboutus'><p>About Us</p></a>
                            <a href='/events'><p>Events</p></a>
                            <a href='/careers'><p>Careers</p></a>
                            <a href='/gallery'><p>Gallery</p></a>
                            <a href='/contact us'><p>Contact Us</p></a>
                        </div>
                    </div>
                    <div>
                        <h1>Contacts</h1>
                        <div className="contacts-details">
                            <p>+255 748 281 701</p>
                            <p>+255 624 196 910</p>
                            <p>info@udiaa.com</p>
                        </div>
                    </div>
                    </div>
                    <div class="vl"></div>
                </Col>

                <Col lg={6} className='right-side-footer'>
                    <div>
                        <h1>Quick Links</h1>
                        <div className="quick-links">
                            <Link to="faq" smooth={true} duration={500}>
                                <p>FAQ</p>
                            </Link>
                            <Link to="leaders" smooth={true} duration={500}>
                                <p>Leaders</p>
                            </Link>
                            <Link to="news" smooth={true} duration={500}>
                                <p>News</p>
                            </Link>
                            <Link to="members" smooth={true} duration={500}>
                                <p>Members</p>
                            </Link>
                            <Link to="values" smooth={true} duration={500}>
                                <p>Values</p>
                            </Link>
                            <Link to="regulations" smooth={true} duration={500}>
                                <p>Principles</p>
                            </Link>
                            <Link to="map" smooth={true} duration={500}>
                                <p>Map</p>
                            </Link>
                            <Link to="organization" smooth={true} duration={500}>
                                <p>Organization</p>
                            </Link>
                            <Link to="Contact" smooth={true} duration={500}>
                                <p>Call</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h1>Privacy Policy</h1>
                        <div className="privacy-policy">
                            <p>Terms and Regulations</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    
                    <div className="footer-social-box">
                        <h1>UDIAA</h1>
                        <button>Our Socials</button>
                        <div className="footer-social-icons">
                           
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <AiOutlineFacebook className="footer-icons"/>
                            </a>
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
                    </div>
                </Col>
            </Row>
            <Row>
                <div className="footer-bottom">
                    <img src={logo}></img>
                  <p>&copy; 2023 UDIAA. All rights reserved.</p>
                  <p>Designed & developed by digito</p>

                </div>
            </Row>
            
        </Container>
    );
}

export default Footer;
