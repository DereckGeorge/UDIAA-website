import React from 'react';
import './Container.css'; // You can create this CSS file for styling
import image1 from '../images/teamwork.png';
import trust from '../images/trust.png';
import cooperation from '../images/cooperation.png';
import corevalues from '../images/corevalue.avif';

const ValuesContainer = () => {
  const items = [
    {
      id: 1,
      image: image1,
      heading: 'Teamwork',
      description: 'This is the heading for the content at first place, the sun and moon appeard to be bright and welcoming to the people of the earth',
    },
    {
      id: 2,
      image: cooperation,
      heading: 'Cooperation',
      description: 'This is the heading for the content at first place, the sun and moon appeard to be bright and welcoming to the people of the earth',
    },
    {
      id: 3,
      image: trust,
      heading: 'Trust',
      description: 'This is the heading for the content at first place, the sun and moon appeard to be bright and welcoming to the people of the earth',
    },
  ];

  return (
    <div className="content1-container">
      <div className="left-side">
        <ul>
          {items.map(item => (
            <li key={item.id} className="item">
              <div className="circle">
                <img src={item.image} alt={`Item ${item.id}`} />
              </div>
              <div className="item-details">
                <h3>{item.heading}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="right-side">
        <img src={corevalues} alt="Right Side Image" />
      </div>
  </div>  
  );
};

export default ValuesContainer;
