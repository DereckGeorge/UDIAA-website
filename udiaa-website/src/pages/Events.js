// src/pages/Home.js

import React from "react";
import Slider from "../components/slider/Slider";
import Event from "../components/EventsContents/EventContainer";

const Events = () => {
  return (
    <div>
      <Slider />
      <h1>This is the Events Page</h1>
      <Event />
    </div>
  );
};

export default Events;
