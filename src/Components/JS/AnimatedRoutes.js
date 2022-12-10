import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Interface from "./Interface";
import Home from "../../Pages/JS/Home";
import About from "../../Pages/JS/About";
import Contact from "../../Pages/JS/Contact";
import Projects from "../../Pages/JS/Projects";
import Gallery from "../../Pages/JS/Gallery";
import NotFound from "./NotFound";

function AnimatedRoutes(props) {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Interface theme={props.theme} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />}></Route>
        </Route>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
export default AnimatedRoutes;
