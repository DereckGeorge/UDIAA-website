import React from "react";
import Slider from "../components/slider/Slider";
import "./style/Home.css";


const Home = () => {
  return (
    <div>
      <Slider />
      <h1 className="heading">This is Heading of <span className="colored-text">Section</span></h1>
      {/*Content 1 */}


      <h1 className="heading">Sponsors Spotlight: <span className="colored-text">Champions</span> of Our Cause</h1>
      {/*Content 2 */}
    </div>
    
  );
};

export default Home;
