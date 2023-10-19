// src/pages/Home.js
import React from "react";
import Slider from "../components/slider/Slider";
import Footer from "../components/footer/footer";
import CareerContainer
 from "../components/careerComponents/careerContainer";
const Careers = () => {
  return (
    <div>
      <Slider />
      <h1>This is the Career Page</h1>
      <CareerContainer/>
      <Footer/>
    </div>
  );
};

export default Careers;
