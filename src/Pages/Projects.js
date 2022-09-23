import React from "react";
import { motion } from "framer-motion";

import ProjectDisplay from "../Components/ProjectDisplay";

import {
  html,
  css,
  javascript,
  react,
  node,
  redux,
  express,
  npm,
  github,
  mongo,
  heroku,
  netlify,
  bootstrap,
  threejs,
} from "../media/icons/iconDOMS";

function Projects(props) {
  const TopFive = [html, css, javascript, react, node];
  const HonorableMentions = [
    express,
    npm,
    redux,
    github,
    mongo,
    heroku,
    netlify,
    bootstrap,
    threejs,
  ];

  return (
    <motion.div
      className="Projects Page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="Header">Tech Stack</div>
      <p>
        I've picked up a few tips and tricks along the way on my journey to
        become a web developer. Immediately below are some of the technologies I
        have worked with so far.
      </p>
      <div className="Technologies">
        <div className="TopFive">{TopFive}</div>
        <div className="HonorableMentions">{HonorableMentions}</div>
      </div>

      <div className="Header">The Projects</div>
      <p>
        Listed in chronological order, here are the larger and significant
        projects that I have—just about—completed thus far. Spoiler alert, this
        portfolio site is the last on the list.
      </p>

      <ProjectDisplay />
    </motion.div>
  );
}
export default Projects;
