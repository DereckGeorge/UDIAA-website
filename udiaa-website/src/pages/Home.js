import React from "react";
import Slider from "../components/slider/Slider";
import "./style/Home.css";
import { useNavigate } from "react-router-dom";

import ValuesContainer from "../components/homeContents/ValuesContainer";
import WelcomeUdiaa from "../components/WelcomeUdiaa/WelcomeUdiaa";
import AboutContainer from "../components/homeContents/AboutContainer";
import SponsorSlider from "../components/SponsorSlider/SponsorSlider";
import Slideshow from "../components/FeebackSlider/SlideShow";
import Footer from "../components/footer/footer";
import ValueMission from "../components/homeContents/ValueMission";
import KnowMoreButton from "../components/Buttons/KnowMoreButton";


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
      
      <h4 className="heading colored-text">Sponsors</h4>
      <h3 className="heading" style={{font:'Inter, sans-serif',}}>Sponsors Spotlight: Champions of Our Cause</h3>
      <SponsorSlider/>
      <h4 className="heading colored-text">Testimonials</h4>
      <h3 className="heading">What Our Members Say</h3>
      <Slideshow/>
      <h4 className="heading colored-text">Join Us</h4>
      <h3 className="heading">Good News! Now You Can Join Us</h3>
      <AboutContainer />
      <Footer/>
    </div>
    
  );
};

export default Home;
