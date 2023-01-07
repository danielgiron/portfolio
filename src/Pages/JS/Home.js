import React from "react";
import { motion } from "framer-motion";

import "../CSS/Home.css";

function Home(props) {
  return (
    <motion.div
      className="Home Page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section>
        <div className="Header">Getting started... Welcome!</div>
        <p>
          Hi there! My name is Baldwin (Daniel) Giron. This is the portfolio
          site I have put together to showcase some of my work and skills in
          software and full stack web development.
        </p>
        <p>
          To read a little more about me or my technical skills, head over to
          the "About" and "Projects" pages respectively.
        </p>
        <p>
          Have an idea for a project you'd like to work on together? Shoot me a
          message via the "Contact" page!
        </p>
        <p>
          I also have a growing gallery collection, linked below, where you can
          find some of my other smaller projects. I intend on making source code
          and related files to entries available to everyone soon! In the
          meantime, feel free to shoot me a message from the contact page.
        </p>
        <a href={`${window.location.origin}/gallery`}>Visit Gallery</a>
      </section>
    </motion.div>
  );
}
export default Home;
