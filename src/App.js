import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Contact from "./routes/Contact";

import { Route, Routes } from "react-router-dom";
import Dev from "./routes/Dev";
import Design from "./routes/Design";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <div>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dev" element={<Dev />} />
          <Route path="/design" element={<Design />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
