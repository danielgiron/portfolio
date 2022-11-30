import React, { useEffect, useRef } from "react";
import "../CSS/Gallery.css";
// import Disc1 from "../../media/gallery/Discs/Disc1";
// import Disc2 from "../../media/gallery/Discs/Disc2";
// import Disc3 from "../../media/gallery/Discs/Disc3";

// import DiscThumbnail from "../../media/gallery/thumbnails/DiscThumbnail.png";
// import SplitThumbnail from "../../Components/JS/SplitThumbnail";
// import randomImg from "../../media/examples/Macros3.png";

import GalleryHero from "../../Components/JS/GalleryHero";
import DemoCard from "../../Components/JS/DemoCard";
import { GalleryNavToggle } from "../../Animations";

import Logo from "../../media/gallery/images/logo192.png";

import D1 from "../../media/gallery/images/Disarray/D1.png";
import D2 from "../../media/gallery/images/Disarray/D2.png";
import D4 from "../../media/gallery/images/Disarray/D4.png";

function Gallery(props) {
  const Renders = useRef(null);
  const CssHtml = useRef(null);
  const Components = useRef(null);

  useEffect(() => {
    const App = document.querySelector(".App");
    App?.classList.add("GalleryContainer");

    GalleryNavToggle();
  }, []);

  return (
    <div className="Gallery">
      <GalleryHero />

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
            <span>Renders</span>
            <span>CSS/HTML</span>
            <span>Components</span>
          </div>
        </nav>
      </div>

      <div className="GalleryContent">
        <section className="Renders" ref={Renders}>
          <h2>Renders</h2>
          <DemoCard
            v1Title="Disarray"
            v1Body="Rendering of the word 'Disarray' using Womp3d"
            v2Title="Thumbnails"
            v2Body="Different views and textures of Disarray"
            images={[D4, D1, D2]}
            tags={["Render", "Design"]}
          />
          <DemoCard />
        </section>
        <section className="CSSHTML" ref={CssHtml}>
          <h2>CSS/HTML</h2>
          <DemoCard />
          <DemoCard />
        </section>
        <section className="Components" ref={Components}>
          <h2>Components</h2>
          <DemoCard />
          <DemoCard />
        </section>
      </div>
    </div>
  );
}
export default Gallery;
