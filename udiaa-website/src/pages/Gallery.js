// src/pages/Home.js

import React from "react";
import Slider from "../components/slider/Slider";
import Footer from "../components/footer/footer";

const Gallery = () => {
  return (
    <div>
      <Slider />
      <h1>This is the Gallery Page</h1>
      <Footer/>
    </div>
  );
};

export default Gallery;
