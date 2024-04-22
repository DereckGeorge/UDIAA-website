import React from "react";
import Slider from "../components/slider/Slider";
import "./style/Home.css";
import WelcomeUdiaa from "../components/WelcomeUdiaa/WelcomeUdiaa";
import AboutContainer from "../components/homeContents/AboutContainer";
import Footer from "../components/footer/footer";
import ValueMission from "../components/homeContents/ValueMission";
import KnowMoreButton from "../components/Buttons/KnowMoreButton";
import ContactForm from "../components/contactContents/contactForm";

const Home = () => {
  return (
    <div>
      <Slider />
      <h4 className="heading colored-text">Welcome to UDIAA </h4>
      <h3 className="heading">University of Dar es salaam Internal Auditors Association</h3>
      <WelcomeUdiaa/>
      <ValueMission/>
      <div className='button'>
      <KnowMoreButton/>
      </div> 
      <h4 className="heading colored-text">Partner</h4>
      <AboutContainer/>
      <h5 className="heading colored-text">Get in Touch</h5>
      <h3 className="heading"></h3>
      <ContactForm/>
      <Footer/>
    </div>
    
  );
};

export default Home;
