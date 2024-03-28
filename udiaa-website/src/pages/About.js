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
   <h4 className='about-head'>About Us</h4>
   
   <AboutSection/>
   <h4 className='about-head mb-3 '>Our Core Values</h4>
   <h3 className='mb-4'>Things That Makes Us Well Organized</h3>
   <ValueSection/>
   <h4 className='about-head mt-5'>Meet Our Team</h4>
   <h3>People Who Makes Things Happen</h3>
   <LeaderSection/>
   <Footer/>
</div>
); 
}; 

export default About;
