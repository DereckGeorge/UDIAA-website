import React from "react";
import {  BrowserRouter, Routes, Route} from "react-router-dom";
// Import the Bootstrap CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
// Import the Bootstrap JavaScript file
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import UdiaaNavbar from "./components/UdiaaNavbar";
import Home from "./pages/Home"; // Import from the pages folder
import About from "./pages/About"; // Import from the pages folder
import Events from "./pages/Events"; // Import from the pages folder
import Careers from "./pages/Careers"; // Import from the pages folder
import Gallery from "./pages/Gallery"; // Import from the pages folder
import Contact from "./pages/Contacts"; // Import from the pages folder

const App = () => {
  return (
    <BrowserRouter>
      <UdiaaNavbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contacts" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
