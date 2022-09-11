import React from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import ImageCarousel from "../Components/ImageCarousel";

import Tasky1 from "../media/Tasky1.png";
import Tasky2 from "../media/Tasky2.png";
import Tasky3 from "../media/Tasky3.png";
import Tasky4 from "../media/Tasky4.png";
import Tasky5 from "../media/Tasky5.png";
import Tasky6 from "../media/Tasky6.png";
import Tasky7 from "../media/Tasky7.png";

function Projects(props) {
  return (
    <motion.div
      className="Projects Page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* <img src={Tasky1} />
      <img src={Tasky2} />
      <img src={Tasky3} />
      <img src={Tasky4} />
      <img src={Tasky5} />
      <img src={Tasky6} />
      <img src={Tasky7} /> */}

      <ImageCarousel />
      <p>
        Dictum varius duis at consectetur lorem donec massa sapien. Aenean sed
        adipiscing diam donec adipiscing tristique. Ullamcorper morbi tincidunt
        ornare massa eget egestas purus viverra accumsan. Ac turpis egestas
        maecenas pharetra convallis posuere morbi leo urna. Fames ac turpis
        egestas integer eget.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Diam quis enim
        lobortis scelerisque. Consequat nisl vel pretium lectus quam id leo in
        vitae. Vitae sapien pellentesque habitant morbi. Placerat vestibulum
        lectus mauris ultrices eros. Amet purus gravida quis blandit turpis. Dui
        nunc mattis enim ut. Magna etiam tempor orci eu lobortis elementum nibh
        tellus.
      </p>

      <Outlet />
    </motion.div>
  );
}
export default Projects;
