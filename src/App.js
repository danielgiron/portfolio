import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
// import axios from "axios";
import Interface from "./Interface";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // async function getBackground() {
    //   const res = await axios.get()
    // }
    // const unsplashRes = null;
    const unsplashURL = "https://source.unsplash.com/collection/1424340";
  }, []);

  return (
    <div className="App" id="App">
      <Routes>
        <Route path="/" element={<Interface />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
