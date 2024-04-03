import React from "react";
import './Leader.css';
import Tozi from '../images/tozi.jpg'
import user from '../images/user.png';
import elsa from '../images/Elsa.jpg';
import priv from '../images/privatus.jpg';
import shadya from '../images/shadya.jpg';
import linda from '../images/Linda.jpg';
import audax from '../images/Audax.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram,faXTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'


const slides = [
  {
    backgroundColor: "#fff",
    position: "President Of Association",
    imageURL: user,
    name: "DAINES B MBAO",
  },
  {
    backgroundColor: "#fff",
    position: "Vice-President Of Association",
    imageURL: audax,
    name:"AUDAX KAMANDO",
  },
  {
    backgroundColor: "#fff",
    position: "Advisory",
    imageURL: user,
    name: "NASRA MATTAKA",
  },
  {
    backgroundColor: "#fff",
    position: "General Secretary",
    imageURL: linda,
    name:"LINDA P MWEMBE",
  },
  {
    backgroundColor: "#fff",
    position: "Treasure",
    imageURL: user,
    name:"ABDUL NASSIB",
  },
  {
    backgroundColor: "#fff",
    position: "Assistant Trasure",
    imageURL: user,
    name:"ARNOLD MWAISAKA",
  },
  {
    backgroundColor: "#fff",
    position: "Advocacy and Publicity",
    imageURL: user,
    name:"GAUDENSIA MSILANGWA",
  },
  {
    backgroundColor: "#fff",
    position: "Assistant Advocacy and Publicity",
    imageURL: priv,
    name:"PRIVATUS A RWEHURURU",
  },
  {
    backgroundColor: "#fff",
    position: "Project Management",
    imageURL: elsa,
    name:"ELSA K OYOO",
  },
  {
    backgroundColor: "#fff",
    position: "Assistant Project Management",
    imageURL: Tozi,
    name:"DONALD PASCHAL",
  },
  {
    backgroundColor: "#fff",
    position: "Technical Committee",
    imageURL: user,
    name:"SYDNEY PETER",
  },
  {
    backgroundColor: "#fff",
    position: "Assistant Technical Committee",
    imageURL: shadya,
    name:"SHADYA A MGUMBA",
  },
];

const delay = 6500;

function LeaderSection() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
    <div className="leader-container">
    <div className="leaderslideshow">
    <div
        className="leaderslideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
            
            {slides.map((slide, idx) => (
          <div
            className="leaderslide"
            key={idx}
            /*style={{ backgroundColor: slide.backgroundColor }}*/
          >
            <div className="slide-block">
            <img
              src={slide.imageURL}
              alt={`User ${idx + 1}`}
            />
            <div className="leader-name">
            <p>{slide.name}</p>
            </div>
            <div className="leader-position">
            <p>{slide.position}</p>
            </div>
           <div className="social-icons-container">
            <div className="icon-container"><FontAwesomeIcon icon={faLinkedinIn} /></div>
            <div className="icon-container"><FontAwesomeIcon icon={faXTwitter} /></div>
            <div className="icon-container"><FontAwesomeIcon icon={faInstagram} /></div>
           </div>
            </div>
            </div>
          
        ))}
      </div>
      <div className="leaderslideshowDots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`leaderslideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
}

export default LeaderSection;
