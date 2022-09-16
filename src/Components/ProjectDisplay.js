import React, { useState } from "react";
import "./ProjectDisplay.css";

import ProjectMacros from "../Pages/ProjectMacros";
import ProjectTasky from "../Pages/ProjectTasky";

function ProjectDisplay(props) {
  const [activeProject, setActiveProject] = useState("unset");

  return (
    <div className="ProjectDisplay">
      <ul className="ProjectList">
        <li
          className={`Project ${
            activeProject === "macros" ? "Active" : "Hidden"
          }`}
        >
          <button
            onClick={() => {
              activeProject === "macros"
                ? setActiveProject("unset")
                : setActiveProject("macros");
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
          className={`Project ${
            activeProject === "tasky" ? "Active" : "Hidden"
          }`}
        >
          <button
            onClick={() => {
              activeProject === "tasky"
                ? setActiveProject("unset")
                : setActiveProject("tasky");
            }}
          >
            <span>Tasky</span>
            <span className="arrow"></span>
          </button>
          <div className="ProjectBody">{<ProjectTasky />}</div>
        </li>
        <li
          className={`Project ${
            activeProject === "portfolio" ? "Active" : "Hidden"
          }`}
        >
          <button
            onClick={() => {
              activeProject === "portfolio"
                ? setActiveProject("unset")
                : setActiveProject("portfolio");
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
