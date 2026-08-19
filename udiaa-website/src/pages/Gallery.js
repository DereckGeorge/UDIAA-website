// src/pages/Home.js
import React from "react";
import "./style/Gallery.css";
import GalleryBanner from "../components/aboutBanner/GalleryBanner";
import Footer from "../components/footer/footer";
import GallerySlider from "../components/GalleryTab/GallerySlider";
const Gallery = () => {
  return (
    <div>
      <GalleryBanner/>
      <h4 className="heading colored-text">Gallery</h4>
      <h3 className='gallery-head'>Explore Our Gallery</h3>
      <GallerySlider/>
      <Footer/>
    </div>
  );
};

export default Gallery;
