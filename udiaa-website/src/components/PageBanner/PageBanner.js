import React from 'react';
import { Link } from 'react-router-dom';
import './PageBanner.css';
import bannerImage from '../images/thebanner.webp';

const PageBanner = ({ title, subtitle, breadcrumbs = [] }) => {
  return (
    <section className="page-banner">
      <div className="page-banner-bg">
        <img src={bannerImage} alt="" aria-hidden="true" />
        <div className="page-banner-overlay"></div>
      </div>
      
      <div className="page-banner-content">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/home" className="breadcrumb-link">Home</Link>
          {breadcrumbs.map((crumb, index) => (
            <span key={index}>
              <span className="breadcrumb-separator">/</span>
              {crumb.path ? (
                <Link to={crumb.path} className="breadcrumb-link">{crumb.label}</Link>
              ) : (
                <span className="breadcrumb-current">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        
        <h1 className="page-banner-title">{title}</h1>
        {subtitle && <p className="page-banner-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageBanner;
