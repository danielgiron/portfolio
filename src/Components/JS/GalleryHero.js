// import React, { useState, useEffect } from "react";
import GalleryBackdrop from "../../media/gallery/images/galleryPhoto.png";
import Logo from "../../media/gallery/images/logo192.png";
import "../CSS/GalleryHero.css";

function GalleryHero(props) {
  return (
    <>
      <div className="Cover" id="GalleryHero">
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
    </>
  );
}
export default GalleryHero;
