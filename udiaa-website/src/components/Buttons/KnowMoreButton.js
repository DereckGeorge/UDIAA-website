import React from "react";
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

const KnowMoreButton = () => {
    return (
        <div>
            <button className="knowmorebutton"><div>Know More</div><div><FontAwesomeIcon icon={faArrowRight} /></div></button>
        </div>
    );
  
};

export default KnowMoreButton;