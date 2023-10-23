import React from 'react';
import './Container.css';
import content2 from '../images/content2.jpg';
import BecomeMemberButton from "../Buttons/BecomeMemberButton";

const AboutContainer = () => {
 ;
  return (
    <div className='too-much-whitespace-member'>
    <div className="become-member-section-container">
      <div className="member-left-side">
            <h1>Become a Member</h1>
            <div className='become-member-paragraph'>
            <p>This is the heading for the content at first place, the sun and moon appeard to be bright and welcoming to the people of the earth</p>
            <p>This is the heading for the content at first place, the sun and moon appeard to be bright and welcoming to the people of the earth</p>
            <p>This is the heading for the content at first place, the sun and moon appeard to be bright and welcoming to the people of the earth</p>
            <p>This is the heading for the content at first place, the sun and moon appeard to be bright and welcoming to the people of the earth</p>
            <BecomeMemberButton/>
            </div>
      </div>
      <div className="member-right-side">
        <img src={content2} alt="Right Side Image" />
      </div>
    </div>
    </div>
  );
};

export default AboutContainer;
