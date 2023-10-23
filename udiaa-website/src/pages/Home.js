import React from "react";
import Slider from "../components/slider/Slider";
import "./style/Home.css";
import ValuesContainer from "../components/homeContents/ValuesContainer";
import AboutContainer from "../components/homeContents/AboutContainer";
import SponsorSlider from "../components/SponsorSlider/SponsorSlider";
import Slideshow from "../components/FeebackSlider/SlideShow";
import Footer from "../components/footer/footer";

const Home = () => {
  return (
    <div>
      <Slider />
      <h1 className="heading">This is What<span className="colored-text"> We do</span></h1>
      <ValuesContainer />
      <h1 className="heading">Sponsors Spotlight: <span className="colored-text">Champions</span> of Our Cause</h1>
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
