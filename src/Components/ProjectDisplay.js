import React, { useState, useRef } from "react";
import "./ProjectDisplay.css";

import ProjectMacros from "../Pages/ProjectMacros";
import ProjectTasky from "../Pages/ProjectTasky";

function ProjectDisplay(props) {
  const [activeProject, setActiveProject] = useState("unset");
  const macrosRef = useRef(null);
  const taskyRef = useRef(null);
  const portfolioRef = useRef(null);

  function scrollTo(ref) {
    setTimeout(() => {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }

  return (
    <div className="ProjectDisplay">
      <ul className="ProjectList SlideElem">
        <li
          ref={macrosRef}
          className={`Project ${
            activeProject === "macros" ? "Active" : "Hidden"
          } `}
        >
          <button
            onClick={() => {
              activeProject === "macros"
                ? setActiveProject("unset")
                : setActiveProject("macros");
              scrollTo(macrosRef);
            }}
          >
            <span>MacrOS</span>
            <span className="arrow"></span>
          </button>
          <div className="ProjectBody">
            <ProjectMacros />
          </div>
        </li>
        <li
          ref={taskyRef}
          className={`Project ${
            activeProject === "tasky" ? "Active" : "Hidden"
          } `}
        >
          <button
            onClick={() => {
              activeProject === "tasky"
                ? setActiveProject("unset")
                : setActiveProject("tasky");
              scrollTo(taskyRef);
            }}
          >
            <span>Tasky</span>
            <span className="arrow"></span>
          </button>
          <div className="ProjectBody">{<ProjectTasky />}</div>
        </li>
        <li
          ref={portfolioRef}
          className={`Project ${
            activeProject === "portfolio" ? "Active" : "Hidden"
          } `}
        >
          <button
            onClick={() => {
              activeProject === "portfolio"
                ? setActiveProject("unset")
                : setActiveProject("portfolio");
              scrollTo(portfolioRef);
            }}
          >
            <span>Portfolio</span>
            <span className="arrow"></span>
          </button>
          <div className="ProjectBody">This is my content for Portfolio!</div>
        </li>
      </ul>
    </div>
  );
}
export default ProjectDisplay;
