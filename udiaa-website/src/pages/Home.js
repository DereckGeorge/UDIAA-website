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
      <h1 className="heading">Embracing Our Core Organization <span className="colored-text"> Values</span></h1>
      <ValuesContainer />
      <h1 className="heading">Sponsors Spotlight: <span className="colored-text">Champions</span> of Our Cause</h1>
      <SponsorSlider/>
      <h1 className="heading">What Our <span className="colored-text">Members</span> Say</h1>
      <Slideshow/>
      <h1 className="heading">Heading For Content <span className="colored-text"> Two</span></h1>
      <AboutContainer />
      <Footer/>
    </div>
    
  );
};

export default Home;
