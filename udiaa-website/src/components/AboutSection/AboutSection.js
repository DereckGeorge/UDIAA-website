import React from 'react'; 
import './AboutSection.css'
import Image from '../images/image1.webp';

const AboutSection = () =>{
    return(
    <div className='about-container'>


        <div className='left-side-about'>
        <h3 className='mt-3'>We Are Here For You</h3>
        <p className='about-paragraph'>
UDIAA is partenered with <span style={{color:'#00B401',}}>THE INSTITUTE OF INTERNAL AUDITORS TANZANIA </span>
and our duty is to connect students with professionals accross IIA Tanzania.<br/>
Our goal is to advocate Internal Audit career choice for students and our organization provides 
a variety of professional development and networking opportunities accross University of Dar es salaam.
            </p>
            </div>


        <div className='right-side-about'>
        <div className='up'></div>
        <div className="down"><img src={Image} alt="Left Side Image" className='image-about'/></div>
        </div>
        </div>

    );
}
export default AboutSection;