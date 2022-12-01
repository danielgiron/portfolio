// import GalleryBackdrop from "../../media/gallery/images/galleryPhoto.png";
import { useEffect } from "react";
import Logo from "../../media/gallery/images/logo192.png";
import "../CSS/GalleryHero.css";

function GalleryHero(props) {
  let RenderSection;
  let CssHtmlSection;
  let ComponentsSection;

  useEffect(() => {
    RenderSection = document.getElementById("Renders");
    CssHtmlSection = document.getElementById("CSSHTML");
    ComponentsSection = document.getElementById("Components");
  }, []);

  function scrollToSection(element) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div className="Cover" id="GalleryHero">
        <div className="GridDecoration">
          <div className="Cell" id="Cell1">
            <div className="vertical" />
            <div className="horizontal" />
          </div>
          <div className="Cell" id="Cell2">
            <div className="MyName">Baldwin Giron</div>
          </div>
          <div className="Cell" id="Cell3">
            <div className="vertical" />
            <div className="horizontal" />
          </div>
          <div className="Cell" id="Cell4"></div>
          <div className="Cell" id="Cell5">
            <img
              id="Logo"
              src={Logo}
              alt="Logo"
              onClick={() => {
                window.location.href = "https://www.baldwingiron.com/home";
              }}
            />

            <nav>
              <a className="MainLi" href="https://www.baldwingiron.com/home">
                Home
              </a>
              <a className="MainLi" href="https://www.baldwingiron.com/about">
                About
              </a>
              <a
                className="MainLi"
                href="https://www.baldwingiron.com/projects"
              >
                Projects
              </a>
              <a className="MainLi" href="https://www.baldwingiron.com/contact">
                Contact
              </a>
              <a
                className="GalleryLi"
                onClick={() => {
                  scrollToSection(ComponentsSection);
                }}
              >
                Components
              </a>
              <a
                className="GalleryLi"
                onClick={() => {
                  scrollToSection(CssHtmlSection);
                }}
              >
                CSS/HTML
              </a>
              <a
                className="GalleryLi"
                onClick={() => {
                  scrollToSection(RenderSection);
                }}
              >
                Renders
              </a>
            </nav>
          </div>
          <div className="Cell" id="Cell6">
            <div className="Boxes">
              <div className="Box" />
              <div className="Box" />
              <div className="Box" />
              <div className="Box" />
              <div className="Box" />
            </div>
          </div>
          <div className="Cell" id="Cell7">
            <div className="vertical" />
            <div className="horizontal" />
          </div>
          <div className="Cell" id="Cell8"></div>
          <div className="Cell" id="Cell9">
            <div className="vertical" />
            <div className="horizontal" />
          </div>

          <header>
            <div className="Display">Galeria</div>
            <div className="Title">Gallery</div>
          </header>
        </div>
      </div>
    </>
  );
}
export default GalleryHero;
