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
          Tasky is my version of a to-do list app if it were expanded to be more
          of a social network. What began as a simple weekend project evolved
          into a weeks long marathon to see how much I was capable of building
          without any tutorials using only what I know.
        </p>
        <p>
          Having previously worked with Node and Express, I decided to create
          backend functionality for Tasky that would allow for users to send
          tasks to one another and monitor their progress. Once comfortable
          building the backend API, I was excited to find out how easily I could
          create a search bar for user profiles with live results, live chat
          functionality, a notification system, and more.
        </p>
        <p>
          This project served really well in strengthening and expanding upon my
          understanding of React. I used this opportunity to dabble with a bit
          of Redux where I could. This project also helped me gain a better
          understanding of Node.js and Express.
        </p>
      </section>
    </>
  );
}
export default ProjectPortfolio;
