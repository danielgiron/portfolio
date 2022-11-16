import React, { useEffect } from "react";
import "../CSS/Gallery.css";
// import Disc1 from "../../media/gallery/Discs/Disc1";
// import Disc2 from "../../media/gallery/Discs/Disc2";
// import Disc3 from "../../media/gallery/Discs/Disc3";

// import DiscThumbnail from "../../media/gallery/thumbnails/DiscThumbnail.png";
// import SplitThumbnail from "../../Components/JS/SplitThumbnail";
// import randomImg from "../../media/examples/Macros3.png";

import GalleryBackdrop from "../../media/gallery/images/galleryPhoto.png";
import Logo from "../../media/gallery/images/logo192.png";

function Gallery(props) {
  function positionButton() {
    // alert(`scrollTo(): ${window.scrollTo()}, offset(): ${window.pageYOffset()}`);
  }

  useEffect(() => {
    const App = document.querySelector(".App");
    App?.classList.add("GalleryContainer");
    const header = document.querySelector("header");

    // Gallery.addEventListener("scroll", (e) => {
    //   alert("scroll");
    //   console.log(headerBox.top);
    // });

    Gallery.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      const headerBox = header.getBoundingClientRect();

      console.log(headerBox.top);

      // if (headerBox.top <= 0) {
      //   header.classList.add("Minified");
      // } else {
      //   header.classList.remove("Minified");
      // }
    }
  }, []);

  return (
    <div className="Gallery">
      <div className="Cover">
        {/* <img id="GalleryBackdrop" src={GalleryBackdrop} alt="Gallery" /> */}

        <div className="GridDecoration">
          <div className="Cell" id="Cell1">
            <div className="vertical" />
            <div className="horizontal" />
          </div>
          <div className="Cell" id="Cell2">
            <div className="MyName">Baldwin Giron</div>
            {/* <div className="horizontal" /> */}
          </div>
          <div className="Cell" id="Cell3">
            <div className="vertical" />
            <div className="horizontal" />
          </div>
          <div className="Cell" id="Cell4">
            {/* <div className="vertical" /> */}
          </div>
          <div className="Cell" id="Cell5">
            <img id="Logo" src={Logo} alt="Logo" />

            <nav>
              <ul id="MainNav">
                <li>Baldwin Giron</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>

              <ul id="GalNav">
                <li>Baldwin Giron</li>
                <li>Components</li>
                <li>Pure CSS</li>
                <li>Analog</li>
              </ul>
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
            {/* <div className="vertical" /> */}
          </div>
          <div className="Cell" id="Cell7">
            <div className="vertical" />
            <div className="horizontal" />
          </div>
          <div className="Cell" id="Cell8">
            {/* <div className="horizontal" /> */}
          </div>
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
      {/* <SplitThumbnail imgSrc={DiscThumbnail} />
      <SplitThumbnail imgSrc={randomImg} /> */}
    </div>
  );
}
export default Gallery;
