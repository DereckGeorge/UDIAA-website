import React from "react";
import Slider from "../components/slider/Slider";
import "./style/Home.css";

import heading1Image from "../components/images/heading1.jpeg";
import teamwork from "../components/images/teamwork.png";


const Home = () => {
  return (
    <div>
      <Slider />
      <h1 className="heading">This is Heading of <span className="colored-text">Section</span></h1>
      {/*Content 1 */}
      <div className="container">
        <div className="left">
          <ul>
            <li>
              <div className="circle">
                <img src={teamwork} alt="Image 1" />
              </div>
              <div className="item-text">
                <h3>Heading</h3>
                This is the paragraph about the content in the first place
                Where you can never imagine, finally it is happening.
              </div>
            </li>
            <li>
              <div className="circle">
                <img src={teamwork} alt="Image 2" />
              </div>
              <div className="item-text">
                <h3>Heading</h3>
                This is the paragraph about the content in the first place
                Where you can never imagine, finally it is happening.
              </div>
            </li>
            <li>
              <div className="circle">
                <img src={teamwork} alt="Image 3" />
              </div>
              <div className="item-text">
                <h3>Heading</h3>
                This is the paragraph about the content in the first place
                Where you can never imagine, finally it is happening.
              </div>
            </li>
          </ul>
        </div>
        <div className="right">
          <img src={heading1Image} alt="Right Image" style={{ width: "400px", height: "450px" }}/>
        </div>
      </div>
      <h1 className="heading">Sponsors Spotlight: <span className="colored-text">Champions</span> of Our Cause</h1>
     
    </div>
    
  );
};

export default Home;
