import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import "./ImageCarousel.css";

import transparentBackdrop from "../media/transparentBackdrop.png";

function ImageCarousel(props) {
  const { slides } = props;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {slides.map((slide, index) => {
        return (
          <Carousel.Item className="carouselSlide" key={index}>
            <img
              className="d-block w-100"
              src={transparentBackdrop}
              alt={`Slide ${index}`}
            />
            <Carousel.Caption>
              <div className="header">{slide.header}</div>
              <img
                src={slide.image}
                onClick={() => {
                  window.open(slide.image);
                }}
              />

              <p>{slide.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default ImageCarousel;
