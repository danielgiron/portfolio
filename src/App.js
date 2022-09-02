import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
// import axios from "axios";
import Interface from "./Interface";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import ThreeJS from "./ThreeJS/ThreeJS";

import "./App.css";
import { useEffect } from "react";

function App() {
  return (
    <div className="App" id="App">
      <Routes>
        <Route path="/" element={<Interface />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>

      <ThreeJS />
    </div>
  );
}

export default App;
