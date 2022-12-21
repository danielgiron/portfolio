import Logo from "../../media/gallery/images/logo192.png";
import "../CSS/GalleryHero.css";

function GalleryHero(props) {
  const origin = window.location.origin;
  function scrollToSection(section) {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
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
                window.location.href = `${origin}/home`;
              }}
            />

            <nav>
              <a className="MainLi" href={`${origin}/home`}>
                Home
              </a>
              <a className="MainLi" href={`${origin}/about`}>
                About
              </a>
              <a className="MainLi" href={`${origin}/projects`}>
                Projects
              </a>
              <a className="MainLi" href={`${origin}/contact`}>
                Contact
              </a>
              <a
                className="GalleryLi"
                onClick={() => {
                  scrollToSection("Components");
                }}
              >
                Components
              </a>
              <a
                className="GalleryLi"
                onClick={() => {
                  scrollToSection("CSSHTML");
                }}
              >
                CSS/HTML
              </a>
              <a
                className="GalleryLi"
                onClick={() => {
                  scrollToSection("Renders");
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
