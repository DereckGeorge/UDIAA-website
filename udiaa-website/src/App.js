import React from "react";
import {  BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; // Import from the pages folder
import About from "./pages/About"; // Import from the pages folder
import Events from "./pages/Events"; // Import from the pages folder
import Careers from "./pages/Careers"; // Import from the pages folder
import Gallery from "./pages/Gallery"; // Import from the pages folder
import Contact from "./pages/Contacts"; // Import from the pages folder

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Events" component={Events} />
        <Route path="/Careers" component={Careers} />
        <Route path="/Gallery" component={Gallery} />
        <Route path="/Contacts" component={Contact} />
      </Routes>
    </Router>
  );
};

export default App;
