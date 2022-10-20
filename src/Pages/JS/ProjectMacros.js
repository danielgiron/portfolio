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
      <div className="Header">Project Summary</div>
      <p>
        MacroOS, a play on "MacOS" and "macros", is a tool nutritional tracking
        application with a variety of useful helpful features. On the first
        view, users are can calculate their daily nutritional macro-nutrient
        requirements as well as their total daily energy expenditure. From
        there, there is a individual food items view and a recipe view from
        which they can see all sorts of useful nutritional info about items and
        recipes in the collections. The last view is a tracking page where users
        can log and see a summary of what they've eaten that day, as well as
        review all previous logs and see trends in their diet with a graphical
        format.
      </p>
      <p>
        This project was my first big dive into the world of React. It was a
        long but equally fun journey getting familiar with what I could do with
        this technology in my tool belt! React aside, the biggest challenge was
        all the data there was to handle, and then creating new data from it.
        There was a lot of manual testing and re-testing of code I had to do,
        but I now know the importance and handiness of tools like Jasmine for
        future projects.
      </p>
      <div className="Header">What I Learned</div>
      <p>
        The big focus of this project was React, however I learned a few more
        things along the way. These include but are not limited to:
      </p>
      <ul>
        <li>JavaScript (Functions and Modules)</li>
        <li>CSS (Selectors and Specificity)</li>
        <li>API Requests</li>
        <li>Responsive Design</li>
        <li>Local Storage</li>
        <li>C3 for D3</li>
      </ul>
    </>
  );
}
export default ProjectMacros;
