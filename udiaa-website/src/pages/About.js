import React from 'react'; 
import AboutBanner from '../components/aboutBanner/aboutBanner'
import "./style/About.css";
import AboutSection from '../components/AboutSection/AboutSection';
import ValueSection from '../components/ValueSection/ValueSection';
import PublicationSection from '../components/PublicationSection/PublicationSection';
<<<<<<< HEAD
import LeaderSection from '../components/LeaderSection/LeaderSection';
=======
import Footer from "../components/footer/footer";

>>>>>>> e3d98defdf6ea694cf2599c4166dde15a49d30d2
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
<<<<<<< HEAD
   <h3 className='about-head'>Meet Our Team Of<span className='highlight'>Changemakers</span></h3>
   <LeaderSection/>
=======
   <Footer/>
>>>>>>> e3d98defdf6ea694cf2599c4166dde15a49d30d2
</div>
); 
}; 

export default About;
