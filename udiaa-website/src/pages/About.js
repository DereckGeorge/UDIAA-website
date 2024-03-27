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
   <h3 className='about-head'><span className='highlight'></span>About Us</h3>
   <AboutSection/>
   <h3 className='about-head'><span className='highlight'></span>Our Core Values</h3>
   <ValueSection/>
   <h3 className='about-head'><span className='highlight'></span>Meet Our Team</h3>
   <LeaderSection/>
   <Footer/>
</div>
); 
}; 

export default About;
