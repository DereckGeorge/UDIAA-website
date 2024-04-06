// src/pages/Home.js
import React from "react";
import CareerB from "../components/aboutBanner/careerB"
import Slider from "../components/slider/Slider";
import Footer from "../components/footer/footer";
import CareerContainer
 from "../components/careerComponents/careerContainer";
const Careers = () => {
  return (
    <div>
      <CareerB />
      <CareerContainer/>
      <Footer/>
    </div>
  );
};

export default Careers;
