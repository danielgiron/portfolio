import React, { useEffect } from "react";
import "../CSS/Gallery.css";
// import Disc1 from "../../media/gallery/Discs/Disc1";
// import Disc2 from "../../media/gallery/Discs/Disc2";
// import Disc3 from "../../media/gallery/Discs/Disc3";

// import DiscThumbnail from "../../media/gallery/thumbnails/DiscThumbnail.png";
// import SplitThumbnail from "../../Components/JS/SplitThumbnail";
// import randomImg from "../../media/examples/Macros3.png";

import GalleryHero from "../../Components/JS/GalleryHero";
import { GalleryNavToggle } from "../../Animations";

function Gallery(props) {
  function positionButton() {
    // alert(`scrollTo(): ${window.scrollTo()}, offset(): ${window.pageYOffset()}`);
  }

  useEffect(() => {
    const App = document.querySelector(".App");
    App?.classList.add("GalleryContainer");
    // const Hero = document.querySelector(".Cover");
    // const header = document.querySelector("header");

    // // Gallery.addEventListener("scroll", (e) => {
    // //   alert("scroll");
    // //   console.log(headerBox.top);
    // // });

    // Gallery.onscroll = function () {
    //   scrollFunction();
    // };

    // function scrollFunction() {
    //   const headerBox = header.getBoundingClientRect();

    //   console.log(headerBox.top);

    //   // if (headerBox.top <= 0) {
    //   //   header.classList.add("Minified");
    //   // } else {
    //   //   header.classList.remove("Minified");
    //   // }
    // }

    GalleryNavToggle();
  }, []);

  return (
    <div className="Gallery">
      <GalleryHero />
      {/* <SplitThumbnail imgSrc={DiscThumbnail} />
      <SplitThumbnail imgSrc={randomImg} /> */}
      <div id="GalleryTopNav">TopNav</div>
      <section className="Renders"></section>
      <section className="CSS/HTML"></section>
      <section className="Components"></section>
    </div>
  );
}
export default Gallery;
