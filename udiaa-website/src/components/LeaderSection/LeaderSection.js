import React from "react";
import './Leader.css';
import person1 from '../images/person1.jpg';
import person2 from '../images/person2.jpg';
import person3 from '../images/person3.jpeg';
import Container from 'react-bootstrap/Container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram,faXTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'


const slides = [
  {
    backgroundColor: "#fff",
    position: "President Of Association",
    text: "\"Members of the internal auditing organization at our university consistently demonstrate exceptional professionalism and dedication to ensuring the integrity and efficiency of our institutional processes\"",
    imageURL: person1,
    name: "John Doe",
  },
  {
    backgroundColor: "#fff",
    position: "President Of Association",
    text: "\"Members of the internal auditing organization at our university consistently demonstrate exceptional professionalism and dedication to ensuring the integrity and efficiency of our institutional processes\"",
    imageURL: person2,
    name:"Selemani sele",
  },
  {
    backgroundColor: "#fff",
    position: "President Of Association",
    text: "\"Members of the internal auditing organization at our university consistently demonstrate exceptional professionalism and dedication to ensuring the integrity and efficiency of our institutional processes\"",
    imageURL: person3,
    name: "Asha Hamza",
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
    <Container className="leader-outer-container">
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
            <div className="social-icons-container">
            <div className="icon-container"><FontAwesomeIcon icon={faLinkedinIn} /></div>
            <div className="icon-container"><FontAwesomeIcon icon={faXTwitter} /></div>
            <div className="icon-container"><FontAwesomeIcon icon={faInstagram} /></div>
           </div>
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
    </Container>
    </>
  );
}

export default LeaderSection;
