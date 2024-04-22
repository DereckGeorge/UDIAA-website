import React from "react";
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
            <div className="knowmorebutton" onClick={handleClick}><div>Read More</div><div><FontAwesomeIcon icon={faArrowRight} /></div></div>
        </div>
     
        
    );
  
};

export default KnowMoreButton;