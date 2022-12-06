import React from "react";
import ImageCarousel from "../../Components/JS/ImageCarousel";
import { portfolioSlides } from "../../Slides";
import { css, javascript, react, threejs } from "../../media/icons/techObjs";

function ProjectPortfolio(props) {
  return (
    <>
      <ImageCarousel slides={portfolioSlides} />
      <div className="TechStack">
        {[css, javascript, react, threejs].map((tech, index) => {
          return (
            <img src={tech.svg} className="icon" alt={tech.name} key={index} />
          );
        })}
      </div>
      <section>
        <div className="Header">At A Glance</div>
        <p>
          Here's a brief list of some of the topics I learned or expanded upon
          in this project:
        </p>
        <ul>
          <li>Three.js</li>
          <li>Personal style development</li>
          <li>Layout and organization</li>
          <li>Presentation</li>
        </ul>
      </section>

      <section>
        <div className="Header">Project Summary</div>
        <p>
          This is my portfolio site! This is where I wanted to some time and
          develop my own style using what I have learned so far. I've added a
          small gallery section so I may showcase future pieces of mine as I
          grow as a developer.
        </p>
        <button
          onClick={() => {
            window.location.href = "https://www.baldwingiron.com/gallery";
          }}
          className="Launch"
        >
          Visit Gallery
        </button>
      </section>
    </>
  );
}
export default ProjectPortfolio;
