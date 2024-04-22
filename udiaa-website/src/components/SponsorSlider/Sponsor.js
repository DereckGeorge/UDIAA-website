import React from 'react';
import './Sponsor.css';
import iaa from '../images/iaalogo.png';
const Sponsor =()=>{
    return(
<div className='sponsor-container'>
<img src={iaa} alt="iaa" className='sponsor-logo' />
</div>
    );
}
export default Sponsor;