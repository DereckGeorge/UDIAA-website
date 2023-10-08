import React from "react";
import {  BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; // Import from the pages folder
import About from "./pages/About"; // Import from the pages folder
import Events from "./pages/Events"; // Import from the pages folder
import Careers from "./pages/Careers"; // Import from the pages folder
import Gallery from "./pages/Gallery"; // Import from the pages folder
import Contact from "./pages/Contacts"; // Import from the pages folder

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
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
