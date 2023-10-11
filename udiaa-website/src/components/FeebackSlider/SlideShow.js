import React from "react";
import './FeedbackSlider.css';
import person1 from '../images/person1.jpg';
import person2 from '../images/person2.jpg';
import person3 from '../images/person3.jpeg';

const slides = [
  {
    backgroundColor: "#6a0dad",
    text: "\"Members of the internal auditing organization at our university consistently demonstrate exceptional professionalism and dedication to ensuring the integrity and efficiency of our institutional processes\"",
    imageURL: person1,
    name: "John Doe",
  },
  {
    backgroundColor: "#6a0dad",
    text: "\"Members of the internal auditing organization at our university consistently demonstrate exceptional professionalism and dedication to ensuring the integrity and efficiency of our institutional processes\"",
    imageURL: person2,
    name:"Selemani sele",
  },
  {
    backgroundColor: "#6a0dad",
    text: "\"Members of the internal auditing organization at our university consistently demonstrate exceptional professionalism and dedication to ensuring the integrity and efficiency of our institutional processes\"",
    imageURL: person3,
    name: "Asha Hamza",
  },
];

const delay = 5500;

function Slideshow() {
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
    <div className="feedbackslideshow">
      <div
        className="feedbackslideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slide, idx) => (
          <div
            className="feedbackslide"
            key={idx}
            style={{ backgroundColor: slide.backgroundColor }}
          >
            <p>{slide.text}</p>
            <img
              src={slide.imageURL}
              alt={`User ${idx + 1}`}
              
            />
            <p>{slide.name}</p>
          </div>
        ))}
      </div>

      <div className="feedbackslideshowDots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`feedbackslideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
