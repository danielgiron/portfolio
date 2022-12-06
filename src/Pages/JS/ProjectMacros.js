import React from "react";
// import ImageCarousel from "../../Components/JS/ImageCarousel";
import ImageCarousel from "../../Components/JS/ImageCarousel";
import { macrosSlides } from "../../Slides";
import { html, css, javascript, react } from "../../media/icons/techObjs";

function ProjectMacros(props) {
  return (
    <>
      <ImageCarousel slides={macrosSlides} />
      <div className="TechStack">
        {[html, css, javascript, react].map((tech, index) => {
          return (
            <img src={tech.svg} className="icon" alt={tech.name} key={index} />
          );
        })}
      </div>
      <section>
        <div className="Header">At A Glance...</div>
        <p>
          The primary goal of this project was familiarizing myself with the
          world of React. However, I also touched upon and explored these topics
          as well:
        </p>
        <ul>
          <li>JavaScript (Functions and Modules)</li>
          <li>CSS (Selectors and Specificity)</li>
          <li>Third Party API's and Requests</li>
          <li>Responsive Design</li>
          <li>Local Storage</li>
          <li>C3 for D3</li>
        </ul>
      </section>
      <section>
        <div className="Header">About This Project</div>
        <p>
          MacrOS, a play on "MacOS" and "macros", is a macronutrient tracking
          web application with a variety of useful features to help users reach
          their nutritional goals. In the first view, users are able to
          calculate their daily nutritional macro-nutrient requirements as well
          as their total daily energy expenditure (TDEE). From there, users may
          search for their favorite food items and create new recipes with them
          from the Items and Recipes views, respectively. The last view is a
          tracking page where users can log and see a summary of their
          macronutrient consumption that day, as well as review all previous
          logs and notice any trends in their diet using graphs made available
          to them.
        </p>
        <p>
          This project was my first big dive into React. It was a long but
          equally fun journey getting familiar with what I could do with this
          technology in my tool kit. React aside, the biggest challenge was all
          the data there was to handle, and then synthesizing new data from it.
        </p>
        <button
          onClick={() => {
            window.location.href = "https://macrosapp.netlify.app";
          }}
          className="Launch"
        >
          Launch MacrOS
        </button>
      </section>
    </>
  );
}
export default ProjectMacros;
