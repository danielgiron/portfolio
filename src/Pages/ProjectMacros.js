import React from "react";
import ImageCarousel from "../Components/ImageCarousel";
import { macrosSlides } from "../Slides";
import { html, css, javascript, react } from "../media/icons/techObjs";

function ProjectMacros(props) {
  return (
    <>
      <ImageCarousel slides={macrosSlides} />
      <div className="TechStack">
        {[html, css, javascript, react].map((tech) => {
          return <img src={tech.svg} className="icon" alt={tech.name} />;
        })}
      </div>
      <div className="Header">Heading One</div>
      <p>
        Dictum varius duis at consectetur lorem donec massa sapien. Aenean sed
        adipiscing diam donec adipiscing tristique. Ullamcorper morbi tincidunt
        ornare massa eget egestas purus viverra accumsan. Ac turpis egestas
        maecenas pharetra convallis posuere morbi leo urna. Fames ac turpis
        egestas integer eget.
      </p>
      <div className="Header">Heading Two</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Diam quis enim
        lobortis scelerisque. Consequat nisl vel pretium lectus quam id leo in
        vitae. Vitae sapien pellentesque habitant morbi. Placerat vestibulum
        lectus mauris ultrices eros. Amet purus gravida quis blandit turpis. Dui
        nunc mattis enim ut. Magna etiam tempor orci eu lobortis elementum nibh
        tellus.
      </p>
    </>
  );
}
export default ProjectMacros;
