// src/pages/Home.js

import React from "react";
import Slider from "../components/slider/Slider";
import Event from "../components/EventsContents/EventContainer";
import Footer from "../components/footer/footer";

const Events = () => {
  return (
    <div>
      <Slider />
      <h1>Discover Our <span className="colored-text">Exciting Events</span></h1>
      <Event />
      <Footer/>
    </div>
  );
};

export default Events;
