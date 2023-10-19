import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Lightbox from "react-image-lightbox";
import { Gallery } from "react-grid-gallery";
import ImageGallery from "react-image-gallery";
import Image1 from "../images/image1.jpg"
import Image2 from "../images/image2.jpg"
import Image3 from "../images/image3.jpg"
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import "./EventImages.css";


const images = [
  {
    original: Image1,
    thumbnail: Image1,
    description: "Hello World My Name Is Vendetta",
  },
  {
    original: Image2,
    thumbnail: Image2,
  },
  {
    original: Image3,
    thumbnail: Image3,
  },
];

  class EventImages extends React.Component {
    render() {
      return <ImageGallery items={images} />;
    }
  }
 
 export default EventImages;