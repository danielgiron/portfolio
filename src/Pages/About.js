import React from "react";
import { motion } from "framer-motion";

function About(props) {
  return (
    <motion.div
      className="About Page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="Header">About Me</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Diam quis enim
        lobortis scelerisque. Consequat nisl vel pretium lectus quam id leo in
        vitae. Vitae sapien pellentesque habitant morbi. Placerat vestibulum
        lectus mauris ultrices eros. Amet purus gravida quis blandit turpis. Dui
        nunc mattis enim ut. Magna etiam tempor orci eu lobortis elementum nibh
        tellus.
      </p>
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
      <p>
        Dictum varius duis at consectetur lorem donec massa sapien. Aenean sed
        adipiscing diam donec adipiscing tristique. Ullamcorper morbi tincidunt
        ornare massa eget egestas purus viverra accumsan. Ac turpis egestas
        maecenas pharetra convallis posuere morbi leo urna. Fames ac turpis
        egestas integer eget.
      </p>
    </motion.div>
  );
}
export default About;
