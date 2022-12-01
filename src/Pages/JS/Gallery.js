import React, { useEffect } from "react";
import "../CSS/Gallery.css";
// import Disc1 from "../../media/gallery/Discs/Disc1";
// import Disc2 from "../../media/gallery/Discs/Disc2";
// import Disc3 from "../../media/gallery/Discs/Disc3";

// import DiscThumbnail from "../../media/gallery/thumbnails/DiscThumbnail.png";
// import SplitThumbnail from "../../Components/JS/SplitThumbnail";
// import randomImg from "../../media/examples/Macros3.png";

import GalleryTopNav from "../../Components/JS/GalleryTopNav";
import GalleryHero from "../../Components/JS/GalleryHero";
import DemoCard from "../../Components/JS/DemoCard";

import D1 from "../../media/gallery/images/Disarray/D1.png";
import D2 from "../../media/gallery/images/Disarray/D2.png";
import D4 from "../../media/gallery/images/Disarray/D4.png";

function Gallery(props) {
  useEffect(() => {
    const App = document.querySelector(".App");
    App?.classList.add("GalleryContainer");
  }, []);

  return (
    <div className="Gallery">
      <GalleryHero />

      <GalleryTopNav />

      <div className="GalleryContent">
        <section className="Introduction">
          <div className="Card">
            <div className="Title">Welcome to my gallery!</div>
            <div className="Body">
              This is a space I created to showcase some of my smaller projects
              and related future creations. For more info on an entry, please
              feel free to reach out using the contact link above. Thanks for
              stopping by!
            </div>
          </div>
        </section>

        <section id="CSSHTML">
          <h2>CSS/HTML</h2>
          <DemoCard />
          <DemoCard />
        </section>

        <section id="Components">
          <h2>Components</h2>
          <DemoCard />
          <DemoCard />
        </section>

        <section id="Renders">
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

        <footer>Copyright © 2022 Baldwin D. Giron | All Rights Reserved</footer>
      </div>
    </div>
  );
}
export default Gallery;
