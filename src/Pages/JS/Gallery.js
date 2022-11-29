import React, { useEffect } from "react";
import "../CSS/Gallery.css";
// import Disc1 from "../../media/gallery/Discs/Disc1";
// import Disc2 from "../../media/gallery/Discs/Disc2";
// import Disc3 from "../../media/gallery/Discs/Disc3";

// import DiscThumbnail from "../../media/gallery/thumbnails/DiscThumbnail.png";
// import SplitThumbnail from "../../Components/JS/SplitThumbnail";
// import randomImg from "../../media/examples/Macros3.png";

import GalleryHero from "../../Components/JS/GalleryHero";
import DemoCard2 from "../../Components/JS/DemoCard2";
import { GalleryNavToggle } from "../../Animations";

import D4 from "../../media/gallery/images/D4.png";

function Gallery(props) {
  useEffect(() => {
    const App = document.querySelector(".App");
    App?.classList.add("GalleryContainer");

    GalleryNavToggle();
  }, []);

  return (
    <div className="Gallery">
      <GalleryHero />

      <div id="GalleryTopNav">TopNav</div>
      <div className="GalleryContent">
        <section className="Renders">
          <h2>Renders</h2>
          <DemoCard2
            v1Title="Disarray"
            v1Body="Rendering of the word 'Disarray' using Womp3d"
            v2Title="Thumbnails"
            v2Body="Different views and textures of Disarray"
            images={[D4]}
            tags={["Render", "Design", "Womp3d"]}
          />
          <DemoCard2 />
        </section>
        <section className="CSSHTML">
          <h2>CSS/HTML</h2>
          <DemoCard2 />
          <DemoCard2 />
        </section>
        <section className="Components">
          <h2>Components</h2>
          <DemoCard2 />
          <DemoCard2 />
        </section>
      </div>
    </div>
  );
}
export default Gallery;
