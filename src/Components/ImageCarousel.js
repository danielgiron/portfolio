import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

import "./ImageCarousel.css";

import Tasky1 from "../media/Tasky1.png";
import Tasky2 from "../media/Tasky2.png";
import Tasky3 from "../media/Tasky3.png";
import Tasky4 from "../media/Tasky4.png";
import Tasky5 from "../media/Tasky5.png";
import Tasky6 from "../media/Tasky6.png";
import Tasky7 from "../media/Tasky7.png";
import transparentBackdrop from "../media/transparentBackdrop.png";

function ImageCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="carouselSlide">
        <img
          className="d-block w-100"
          src={transparentBackdrop}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="header">First slide label</div>
          <img src={Tasky1} />

          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carouselSlide">
        <img
          className="d-block w-100"
          src={transparentBackdrop}
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className="header">Second slide label</div>
          <img
            src={Tasky2}
            onClick={() => {
              window.open(Tasky2);
              // alert("clicked");
            }}
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carouselSlide">
        <img
          className="d-block w-100"
          src={transparentBackdrop}
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className="header">Third slide label</div>
          <img src={Tasky3} />
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default ImageCarousel;
