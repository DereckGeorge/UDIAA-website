import React from 'react';
import './SponsorSlider.css';
import crdb from '../images/crdb.png';
import udsm from '../images/udsm.png';
import jubilee from '../images/jubilee.png';
import airtel from '../images/airtel.png';
import tra from '../images/tra.png';


const SponsorSlider = () => {
  return (
    <div className='slider-outer-container'>
    <div className="sponsor-slider">
      <div className="slider-content">
        <div className="slider-inner">
          <img src={airtel} alt="airtel" style={{  }}/>
          <img src={udsm} alt="udsm" />
          <img src={crdb} alt="crdb" />
          <img src={jubilee} alt="jubilee" />
          <img src={tra} alt="tra" />
          <img src={airtel} alt="airtel" />
          <img src={udsm} alt="udsm" />
          <img src={crdb} alt="crdb" />
          <img src={jubilee} alt="jubilee" />
          <img src={tra} alt="tra" />
          <img src={airtel} alt="airtel" />
          <img src={udsm} alt="udsm" />
          <img src={crdb} alt="crdb" />
          <img src={jubilee} alt="jubilee" />
          <img src={tra} alt="tra" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default SponsorSlider;
