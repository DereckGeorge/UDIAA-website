import React from 'react';
import 'animate.css';
import './header.css';
import { useNavigate } from "react-router-dom";
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
<div class="text-overlay animate__animated animate__slideInDown">
      <div><h1>Welcome to UDIAA</h1></div>
      <div><p >WE SHAPE YOUR FUTURE TODAY</p></div>
      <div className="learnmorebutton animate__animated animate__shakeX animate__repeat-2 animate__slower animate__delay-2s" onClick={handleClick}><div>Learn More</div><div><FontAwesomeIcon icon={faArrowRight} /></div></div>
    </div>
</section >
  </>
  );
};

export default Header;