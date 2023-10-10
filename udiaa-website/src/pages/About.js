import React from 'react'; 
import Slider from "../components/slider/Slider";
import Slideshow from "../components/FeebackSlider/SlideShow";

const About = () => { 
return ( 
	<div className="about-container">
      <Slider />
      <h1 className="about-heading">Welcome to About Us Page</h1>
      <Slideshow/>
    </div>
); 
}; 

export default About;
