import React from "react";
import { motion } from "framer-motion";

// import "./Home.css";

function Home(props) {
  return (
    <motion.div
      className="Home Page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="Header">Getting started... Welcome!</div>
      <p>
        Hi there! My name is Baldwin (Daniel) Giron. This is the portofolio site
        I have put together to showcase some of my work and skills in web
        development.
      </p>
      <p>
        To read a little bit more about me or my technical skills, head over to
        the "About" and "Projects" pages respectively.{" "}
      </p>
      <p>
        If you have an idea for a project you would like to work on with me, I
        would be thrilled if you reach out from the form in the "Contact" page!
      </p>
    </motion.div>
  );
}
export default Home;
