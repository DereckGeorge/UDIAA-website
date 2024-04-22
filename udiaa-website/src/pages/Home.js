import React from "react";
import "./style/Home.css";
import WelcomeUdiaa from "../components/WelcomeUdiaa/WelcomeUdiaa";
import AboutContainer from "../components/homeContents/AboutContainer";
import Footer from "../components/footer/footer";
import ValueMission from "../components/homeContents/ValueMission";
import KnowMoreButton from "../components/Buttons/KnowMoreButton";
import ContactForm from "../components/contactContents/contactForm";
import Sponsor from "../components/SponsorSlider/Sponsor";
import Header from "../components/header/header";
const Home = () => {
  return (
    <>
    <div>
      <Header/>
      </div>

      <div className="the-head">
      <h4 className="colored-text">About us </h4>
      <h3 className="heading mt-5">Discover Our Mission and Values</h3>
      <WelcomeUdiaa/>
      <div className='button'>
      <KnowMoreButton/>
      </div>
      </div>

      <div className="the-head">
      <ValueMission/>
      </div>



      
      
      <div className="the-head">
      <h4 className="colored-text">Sponsor & Partner</h4>
      <h3 className="heading mt-5">Meet the Champion of our clause.</h3>
      <Sponsor/>
      </div>

      <div className="the-head">
      <h4 className="colored-text">Join Us</h4>
      <AboutContainer/>
      
      </div>

      <div className="the-head">
      <h5 className="colored-text">Get in Touch</h5>
      <h3 className="heading mt-5">Send us a message</h3>
      <ContactForm/>
      </div>

<div className="the-head">
      <Footer/>
      </div>
    </>
  );
};

export default Home;
