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
    <>
<section class="bg-image d-flex">
<div class="text-overlay">
      <div><h1>Welcome to UDIAA</h1></div>
      <div><p >WE SHAPE YOUR FUTURE TODAY</p></div>
      <div className="learnmorebutton" onClick={handleClick}><div>Learn More</div><div><FontAwesomeIcon icon={faArrowRight} /></div></div>
    </div>
</section >
  </>
  );
};

export default Header;