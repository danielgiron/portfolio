import React, { useEffect } from "react";
import { GalleryNavToggle } from "../../Animations";
import Logo from "../../media/gallery/images/logo192.png";
import "../CSS/GalleryTopNav.css";

function GalleryTopNav(props) {
  let RenderSection;
  let CssHtmlSection;
  let ComponentsSection;

  useEffect(() => {
    //getting element for scrollTo function
    RenderSection = document.getElementById("Renders");
    CssHtmlSection = document.getElementById("CSSHTML");
    ComponentsSection = document.getElementById("Components");

    //running script to hide/show top navigation on scroll threshold
    GalleryNavToggle();
  }, []);

  function scrollToSection(element) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div id="GalleryTopNav">
      <nav>
        <div className="Main">
          <img src={Logo} />
          <a href="https://www.baldwingiron.com/home">Home</a>
          <a href="https://www.baldwingiron.com/about">About</a>
          <a href="https://www.baldwingiron.com/projects">Projects</a>
          <a href="https://www.baldwingiron.com/contact">Contact</a>
        </div>
        <div className="Here">
          <a
            onClick={() => {
              scrollToSection(RenderSection);
            }}
          >
            Renders
          </a>
          <a
            onClick={() => {
              scrollToSection(CssHtmlSection);
            }}
          >
            CSS/HTML
          </a>
          <a
            onClick={() => {
              scrollToSection(ComponentsSection);
            }}
          >
            Components
          </a>
        </div>
      </nav>
    </div>
  );
}
export default GalleryTopNav;
