import { useNavigate } from "react-router-dom";
import React from "react";
import ImageCarousel from "../Components/ImageCarousel";
import { macrosSlides } from "../Slides";

function ProjectMacros(props) {
  return (
    <>
      <ImageCarousel slides={macrosSlides} />

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
