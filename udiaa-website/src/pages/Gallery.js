import React from "react";
import "./style/Gallery.css";
import Footer from "../components/footer/footer";
import PageBanner from "../components/PageBanner/PageBanner";
import GallerySlider from "../components/GalleryTab/GallerySlider";

const Gallery = () => {
  return (
    <div className="gallery-page">
      <PageBanner 
        title="Gallery" 
        subtitle="Capturing moments of excellence and professional growth"
      />
      
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-header">
            <span className="section-label">Our Memories</span>
            <h2 className="section-title">Photo Gallery</h2>
            <p className="section-description">
              Browse through our collection of memorable moments from events, 
              meetings, and training sessions.
            </p>
          </div>
          
          <GallerySlider />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Gallery;
