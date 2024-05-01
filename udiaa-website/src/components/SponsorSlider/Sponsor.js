import React, { useEffect, useRef } from "react";
import './Sponsor.css';
import iaa from '../images/iaalogo.png';
const Sponsor =()=>{
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
    return(
<div className='sponsor-container' ref={animatedElementRef}>
<img src={iaa} alt="iaa" className='sponsor-logo' />
</div>
    );
}
export default Sponsor;