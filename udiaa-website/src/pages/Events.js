// src/pages/Home.js

import React from "react";
import Slider from "../components/slider/Slider";
import Event from "../components/EventsContents/EventContainer";

const Events = () => {
  return (
    <div>
      <Slider />
      <h1>Discover Our <span className="colored-text">Exciting Events</span></h1>
      <Event />
    </div>
  );
};

export default Events;
