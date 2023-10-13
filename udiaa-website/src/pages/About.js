import React from 'react'; 
import AboutBanner from '../components/aboutBanner/aboutBanner'
import "./style/About.css";
import AboutSection from '../components/AboutSection/AboutSection';
import ValueSection from '../components/ValueSection/ValueSection';
const About = () => { 
return (
<div>
   <AboutBanner/>
   <h3 className='about-head'>Welcome to <span className='highlight'>UDIAA</span></h3>
   <AboutSection/>
   <h3 className='about-head'>Our Organization<span className='highlight'>Values</span></h3>
   <ValueSection/>
</div>
); 
}; 

export default About;
