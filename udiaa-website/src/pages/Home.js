import React from "react";
import Slider from "../components/slider/Slider";
import "./style/Home.css";
import Container from "../components/homeContents/Container";
import SponsorSlider from "../components/SponsorSlider/SponsorSlider";

const Home = () => {
  return (
    <div>
      <Slider />
      <h1 className="heading">This is Heading of <span className="colored-text">Section</span></h1>
      <Container />
      <h1 className="heading">Sponsors Spotlight: <span className="colored-text">Champions</span> of Our Cause</h1>
      <SponsorSlider/>
    </div>
    
  );
};

export default Home;
