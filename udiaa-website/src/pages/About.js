import React from 'react'; 
import AboutBanner from '../components/aboutBanner/aboutBanner'
import "./style/About.css";
import AboutSection from '../components/AboutSection/AboutSection';
import ValueSection from '../components/ValueSection/ValueSection';
import Footer from "../components/footer/footer";
import Membership from "../components/AboutSection/membership";
const About = () => { 
return (
<div>
   <AboutBanner/>

   <h2 className='about-head'>About Us</h2>
   <h4 className='ah mt-3 mb-4'>We Shape Your Future Today</h4>
   <AboutSection/>
   
   <h2 className='about-head mb-3 '>Our Core Values</h2>
   <h4 className='ah mb-4'>Things That Makes Us Well Organized</h4>
   <ValueSection/>
   <h2 className='about-head mb-3 '>Membership benefits</h2>
   <Membership/>
   <Footer/>
</div>
); 
}; 

export default About;
