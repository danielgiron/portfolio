import React from "react";
import ImageCarousel from "../../Components/JS/ImageCarousel";
import { taskySlides } from "../../Slides";
import {
  html,
  css,
  javascript,
  react,
  node,
  express,
  redux,
  mongo,
} from "../../media/icons/techObjs";

function ProjectTasky(props) {
  return (
    <>
      <ImageCarousel slides={taskySlides} />
      <div className="TechStack">
        {[html, css, javascript, react, redux, node, express, mongo].map(
          (tech, index) => {
            return (
              <img
                src={tech.svg}
                className="icon"
                alt={tech.name}
                key={index}
              />
            );
          }
        )}
      </div>
      <section>
        <div className="Header">At A Glance</div>
        <p>
          Here's a brief list of some of the topics I learned or expanded upon
          in this project:
        </p>
        <ul>
          <li>Redux (State Management)</li>
          <li>Building API's</li>
          <li>Node.js with Express</li>
          <li>Database Structuring</li>
          <li>Database Querying</li>
          <li>CSS Styling</li>
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
          of Redux where I could. This project also helped me gain a much better
          handle of Node.js and Express.
        </p>

        <div className="Note">
          Tasky is hosted on Heroku's Hobby tier—please allow a few seconds for
          Heroku's dyno system to spin up and load the backend API
        </div>
        <button
          onClick={() => {
            window.location.href = "https://taskysocialnetwork.netlify.app";
          }}
          className="Launch"
        >
          Launch Tasky
        </button>
      </section>
    </>
  );
}
export default ProjectTasky;
