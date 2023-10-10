import React from "react";
import Slider from "../components/slider/Slider";
import "./style/Home.css";
import Container from "../components/homeContents/Container";
import SponsorSlider from "../components/SponsorSlider/SponsorSlider";
import Slideshow from "../components/FeebackSlider/SlideShow";

const Home = () => {
  return (
    <div>
      <Slider />
      <h1 className="heading">Embracing Our Core Organization <span className="colored-text"> Values</span></h1>
      <Container />
      <h1 className="heading">Sponsors Spotlight: <span className="colored-text">Champions</span> of Our Cause</h1>
      <SponsorSlider/>
      <h1 className="heading">What Our <span className="colored-text">Members</span> Say</h1>
      <Slideshow/>
    </div>
    
  );
};

export default Home;
