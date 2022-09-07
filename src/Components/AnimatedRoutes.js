import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Torus from "../ThreeJS/Torus";
import { useEffect, useState } from "react";
import { blankTheme, macrosTheme, taskyTheme } from "../Themes";

import Interface from "./Interface";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Projects from "../Pages/Projects";

function AnimatedRoutes(props) {
  const location = useLocation();
  const [theme, setTheme] = useState(taskyTheme);

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Interface theme={props.theme} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}
export default AnimatedRoutes;
