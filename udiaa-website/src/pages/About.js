import React from 'react'; 
import AboutBanner from '../components/aboutBanner/aboutBanner'
import "./style/About.css";
import AboutSection from '../components/AboutSection/AboutSection';
import ValueSection from '../components/ValueSection/ValueSection';
import PublicationSection from '../components/PublicationSection/PublicationSection';
import LeaderSection from '../components/LeaderSection/LeaderSection';
const About = () => { 
return (
<div>
   <AboutBanner/>
   <h3 className='about-head'>Welcome to <span className='highlight'>UDIAA</span></h3>
   <AboutSection/>
   <h3 className='about-head'>Our Organization<span className='highlight'>Values</span></h3>
   <ValueSection/>
   <h3 className='about-head'>Download Our<span className='highlight'>Publications</span></h3>
   <PublicationSection/>
   <h3 className='about-head'>Meet Our Team Of<span className='highlight'>Changemakers</span></h3>
   <LeaderSection/>
</div>
); 
}; 

export default About;
