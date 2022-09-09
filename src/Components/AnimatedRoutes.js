import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Interface from "./Interface";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Projects from "../Pages/Projects";
// import ProjectMacros from "../Pages/ProjectMacros";
// import ProjectTasky from "../Pages/ProjectTasky";

function AnimatedRoutes(props) {
  // const location = useLocation();

  return (
    <AnimatePresence>
      {/* <Routes location={location} key={location.pathname}> */}
      <Routes>
        <Route path="/" element={<Interface theme={props.theme} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />}>
            {/* <Route path="/projects/macros" element={<ProjectMacros />} />
            <Route path="/projects/tasky" element={<ProjectTasky />} /> */}
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
export default AnimatedRoutes;
