import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../Animations";
import "./Projects.css";
import "../Animations.css";

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
} from "../media/icons/techObjs";

function Projects(props) {
  const allIcons = [
    html,
    css,
    javascript,
    react,
    node,
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

  useEffect(() => {
    slideIn();
  }, []);

  return (
    <motion.div
      className="Projects Page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section>
        <div className="Header SlideElem">Tech Stack</div>
        <p className="SlideElem">
          I've picked up a few tips and tricks along the way on my journey to
          become a web developer. Immediately below are some of the technologies
          I have worked with so far.
        </p>
        <div className="Technologies SlideElem">
          {allIcons.map((tech) => {
            return (
              <div className="Tech SlideElem" key={tech.name}>
                <img src={tech.svg} className="icon" alt={tech.name} />
                <div className="label">{tech.name}</div>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <div className="Header SlideElem">The Projects</div>
        <p className="SlideElem">
          Listed in chronological order, here are the larger and significant
          projects that I have—just about—completed thus far.
        </p>
        <p>(Spoiler alert, this portfolio site is the last on the list)</p>

        <ProjectDisplay />
      </section>
      <section>
        <div className="Header SlideElem">The Future</div>
        <p>
          In the future I plan on learning more or working on the following:
        </p>
        <ul>
          <li>Jasmine</li>
          <li>CSS Preprocessors</li>
          <li>Open Source Projects + Contributions</li>
          <li>More on Three.js</li>
        </ul>
      </section>
    </motion.div>
  );
}
export default Projects;
