// src/pages/Home.js
import React from "react";
import "./style/Gallery.css";
import GalleryBanner from "../components/aboutBanner/GalleryBanner";
import Footer from "../components/footer/footer";
import GalleryTab from "../components/GalleryTab/GalleryTab";

const Gallery = () => {
  return (
    <div>
      <GalleryBanner/>
      <h3 className='gallery-head'>Explore Our<span className='highlight'>Gallery</span></h3>
      <GalleryTab/>
      <Footer/>
    </div>
  );
};

export default Gallery;
