import React from "react";
import Slider from "../components/slider/Slider";
import Map from "../components/contactContents/mapContainer";
import ContactCard from "../components/contactContents/contactCard";
import ContactForm from "../components/contactContents/contactForm";
import FAQContainer from "../components/contactContents/faq";
import Footer from "../components/footer/footer";

const Contacts = () => {
  return (
    <div>
     <Slider />
      <ContactCard/>
      <h1><center>Where To Find Us</center></h1>
      <Map/>
      <ContactForm />
      <h1><center>Frequently Asked Questions</center></h1>
      <FAQContainer/>
      <Footer/>
    </div>
  );
};

export default Contacts;
