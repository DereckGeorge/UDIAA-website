import React from 'react';
import './Container.css';
import content2 from '../images/content2.jpg';
import BecomeMemberButton from "../Buttons/BecomeMemberButton";

const AboutContainer = () => {
 ;
  return (
    <div className="content1-container">
      <div className="left-side">
        <ul>
            <h1>Heading</h1>
            <p>This is the heading for the content at first place, the sun and moon appeard to be bright and welcoming to the people of the earth</p>
            <p>This is the heading for the content at first place, the sun and moon appeard to be bright and welcoming to the people of the earth</p>
            <p>This is the heading for the content at first place, the sun and moon appeard to be bright and welcoming to the people of the earth</p>
            <p>This is the heading for the content at first place, the sun and moon appeard to be bright and welcoming to the people of the earth</p>
            <BecomeMemberButton/>
        </ul>
      </div>
      <div className="right-side">
        <img src={content2} alt="Right Side Image" />
      </div>
    </div>
  );
};

export default AboutContainer;
