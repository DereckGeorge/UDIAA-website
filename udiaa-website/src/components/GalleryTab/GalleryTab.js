import { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import "./Gallerytab.css";
import EventGallery from '../AllGalleryTabs/EventGallery'
import MemberGallery from '../AllGalleryTabs/MemberGallery'

const GalleryTab = () =>{
    const [activeTab, setActiveTab] = useState("EventGallery");
    //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("EventGallery");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("MemberGallery");
  };
    return(
        <div>
      <Nav className='tab-container' fill variant="tabs" defaultActiveKey="/EventGallery">
      <Nav.Item>
        <Nav.Link className={activeTab === "EventGallery" ? "active" : ""} 
        onClick={handleTab1}
        >Event Gallery</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className={activeTab === "MemberGallery" ? "active" : ""} 
        onClick={handleTab2}>Members Life</Nav.Link>
      </Nav.Item>
      

    </Nav>
    <div className="outlet">
    {activeTab === "EventGallery" ? <EventGallery/> : <MemberGallery />}
    </div>
    </div>
    );
}
export default GalleryTab;