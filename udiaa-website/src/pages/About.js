import React from 'react'; 
import AboutBanner from '../components/aboutBanner/aboutBanner'
import "./style/About.css";
import AboutSection from '../components/AboutSection/AboutSection';
import ValueSection from '../components/ValueSection/ValueSection';
import LeaderSection from '../components/LeaderSection/LeaderSection';
import Footer from "../components/footer/footer";

const About = () => { 
return (
<div>
   <AboutBanner/>
   <AboutSection/>
   <h3 className='about-head'>Our Organization<span className='highlight'>Values</span></h3>
   <ValueSection/>
   <h3 className='about-head'>Meet Our Team Of<span className='highlight'>Changemakers</span></h3>
   <LeaderSection/>
   <Footer/>
</div>
); 
}; 

export default About;
