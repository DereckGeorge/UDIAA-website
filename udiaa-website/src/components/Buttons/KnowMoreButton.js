import React from "react";
import 'animate.css';
import './Button.css';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'




const KnowMoreButton = () => {
const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };
    return (
        
          <div>
            <div className="knowmorebutton animate__animated animate__shakeX animate__repeat-2 animate__slower animate__delay-2s" onClick={handleClick}><div>Read More</div><div><FontAwesomeIcon icon={faArrowRight} /></div></div>
        </div>
     
        
    );
  
};

export default KnowMoreButton;