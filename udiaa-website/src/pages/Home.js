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
      <h2 className="colored-text">About us </h2>
      <h4 className="head">Discover Our Mission and Values</h4>
      </div> 
      <div className="the-head">
      <WelcomeUdiaa/>
      </div>
      
      <div className='the-head'>
      <KnowMoreButton/>
      </div>
      <div className="the-head">
      <ValueMission/>
      </div>

      <div className="the-head">
      <h2 className="colored-text">Sponsor & Partner</h2>
      <h4 className="head">Meet the Champion of our clause.</h4>
      <div>
      <Sponsor/>
      </div>

      </div>

      <div className="the-head">
      <h2 className="colored-text">Join Us</h2>
      </div>
      <AboutContainer/>
      <div className="the-head">
      <h2 className="colored-text">Get in Touch</h2>
      <h4 className="head">Send us a message</h4>
      </div>
      <ContactForm/>

      <Footer/>
    </>
  );
};

export default Home;
