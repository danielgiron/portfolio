import React from "react";
import "../CSS/Gallery.css";
import Disc1 from "../../media/gallery/Discs/Disc1";
import Disc2 from "../../media/gallery/Discs/Disc2";
import Disc3 from "../../media/gallery/Discs/Disc3";

import DiscThumbnail from "../../media/gallery/thumbnails/DiscThumbnail.png";
import SplitThumbnail from "../../Components/JS/SplitThumbnail";
import randomImg from "../../media/examples/Macros3.png";

function Gallery(props) {
  return (
    <div className="Gallery">
      <div className="Cover">
        <header>
          <div className="Title">Galería</div>
          <nav>
            <ul>
              <li>Baldwin Giron</li>
              <li>Components</li>
              <li>Pure CSS</li>
              <li>Analog</li>
            </ul>
          </nav>
        </header>
      </div>
      {/* <SplitThumbnail imgSrc={DiscThumbnail} />
      <SplitThumbnail imgSrc={randomImg} /> */}
    </div>
  );
}
export default Gallery;
