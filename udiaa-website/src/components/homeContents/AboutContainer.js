import React, { useEffect, useRef } from "react";
import './Container.css';
import BecomeMemberButton from "../Buttons/BecomeMemberButton";
const AboutContainer = () => {

  const animatedElementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (animatedElementRef.current && isElementInViewport(animatedElementRef.current)) {
        // Add the animation class to trigger the animation
        animatedElementRef.current.classList.add('animate__animated', 'animate__slideInLeft');
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isElementInViewport = (el) => {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  return (
    <div fluid className="aboutContainer">
      <div ref={animatedElementRef}>
<h1>We need you at our community</h1>
      </div>
        
        <p>Join our internal audit association to connect with like-minded professionals, access valuable resources, and advance your career in auditing.</p>
        <div className='middle-button'>
        <a href="https://forms.gle/aVhUy7PceTNygHZ5A"><BecomeMemberButton/></a>
      </div>
    </div>
  );
};

export default AboutContainer;
