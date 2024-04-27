import React from 'react';
import './header.css';
import { useNavigate } from "react-router-dom";
import HeadImage from '../images/image1.webp'
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };
  return (
    <Container fluid>
    <div class=" fluid-container">
    <img class="image" src={HeadImage} alt="Blurred Image"/>
    <div class="overlay">
      <h1 className='hh'>Welcome to UDIAA</h1>
      <div className="learnmorebutton" onClick={handleClick}><div>Learn More</div><div><FontAwesomeIcon icon={faArrowRight} /></div></div>
    </div>
  </div>
  </Container>
  );
};

export default Header;