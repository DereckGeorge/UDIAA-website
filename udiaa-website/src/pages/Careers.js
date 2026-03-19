import React from "react";
import Footer from "../components/footer/footer";
import PageBanner from "../components/PageBanner/PageBanner";
import CareerContainer from "../components/careerComponents/careerContainer";
import "./style/Careers.css";

const Careers = () => {
  return (
    <div className="careers-page">
      <PageBanner 
        title="Careers" 
        subtitle="Discover opportunities for professional growth and development"
      />
      
      <section className="careers-section">
        <div className="container">
          <div className="careers-header">
            <span className="section-label">Opportunities</span>
            <h2 className="section-title">Career Opportunities</h2>
            <p className="section-description">
              Explore the latest career opportunities and stay updated with industry news 
              and professional development resources.
            </p>
          </div>
          
          <CareerContainer />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Careers;
