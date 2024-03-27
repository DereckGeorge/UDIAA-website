import React from "react";
import Slider from "../components/slider/Slider";
import "./style/Home.css";
import ValuesContainer from "../components/homeContents/ValuesContainer";
import WelcomeUdiaa from "../components/WelcomeUdiaa/WelcomeUdiaa";
import AboutContainer from "../components/homeContents/AboutContainer";
import SponsorSlider from "../components/SponsorSlider/SponsorSlider";
import Slideshow from "../components/FeebackSlider/SlideShow";
import Footer from "../components/footer/footer";
import ValueMission from "../components/homeContents/ValueMission";

const Home = () => {
  return (
    <div>
      <Slider />
      <h1 className="heading"> <span className='highlight'></span>Welcome to UDIAA </h1>
      <h2 className="heading colored-text">University of Dar es salaam Internal Auditors Association</h2>
      <WelcomeUdiaa/>
      <ValueMission/>
      <h1 className="heading"> <span className='highlight'></span> Sponsors Spotlight: Champions of Our Cause</h1>
      <SponsorSlider/>
      <h1 className="heading">What Our <span className="colored-text">Members</span> Say</h1>
      <Slideshow/>
      <h1 className="heading">Good News! Now You Can <span className="colored-text">Join Us</span></h1>
      <AboutContainer />
      <Footer/>
    </div>
    
  );
};

export default Home;
