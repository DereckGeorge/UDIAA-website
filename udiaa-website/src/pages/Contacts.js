import React from "react";
import Slider from "../components/slider/Slider";
import Map from "../components/contactContents/mapContainer";
import ContactCard from "../components/contactContents/contactCard";

const Contacts = () => {
  return (
    <div>
      <Slider />
      <ContactCard/>
      <h1><center>Where To Find Us</center></h1>
      <Map/>
    </div>
  );
};

export default Contacts;
