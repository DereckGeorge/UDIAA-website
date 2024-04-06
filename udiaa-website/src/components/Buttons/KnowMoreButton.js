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
            <button className="knowmorebutton" onClick={handleClick}><div>Know More</div><div><FontAwesomeIcon icon={faArrowRight} /></div></button>
        </div>
     
        
    );
  
};

export default KnowMoreButton;