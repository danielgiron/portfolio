//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import "../CSS/DemoCard.css";

import D4 from "../../media/gallery/images/D4.png";

function DemoCard(props) {
  const [liveIndex, setLiveIndex] = useState(1);
  const [prevDisabled, disablePrev] = useState(true);
  const [nextDisabled, disableNext] = useState(false);

  function keepWithinBounds(index, action) {
    if (
      (index === 1 && action == "decrement") ||
      (index === 3 && action === "increment")
    ) {
      return index;
    } else {
      if (action === "increment") {
        return index + 1;
      } else {
        return index - 1;
      }
    }
  }

  function prevClick() {
    const slideInView = keepWithinBounds(liveIndex, "decrement");
    setLiveIndex(slideInView);
  }

  function nextClick() {
    const slideInView = keepWithinBounds(liveIndex, "increment");
    setLiveIndex(slideInView);
  }

  useEffect(() => {
    if (liveIndex === 1) {
      disablePrev(true);
      disableNext(false);
    } else if (liveIndex === 3) {
      disablePrev(false);
      disableNext(true);
    } else {
      disablePrev(false);
      disableNext(false);
    }
  }, [liveIndex]);

  return (
    <div className="DemoCard">
      <div className="SlideContainer">
        <div className={`Slide ${liveIndex === 1 ? "Active" : ""}`} id="Slide1">
          <div className="TextContainer">
            <div className="SlideTitle">Component Name</div>
            <div className="SlideBody">
              This is where a simple description will go for your DemoCard
            </div>
          </div>

          <div className="ImageContainer">
            <img src={D4} />
          </div>
        </div>

        <div className={`Slide ${liveIndex === 2 ? "Active" : ""}`} id="Slide2">
          <div className="SlideTitle">Thumbnails</div>
          <div className="Thumbnails">
            <img src={D4} />
            <img src={D4} />
            <img src={D4} />
          </div>
        </div>

        <div className={`Slide ${liveIndex === 3 ? "Active" : ""}`} id="Slide3">
          <div className="SlideTitle">Source</div>
        </div>
      </div>

      <button
        className={`Prev ${prevDisabled ? "DisabledButton" : ""}`}
        onClick={prevClick}
      />
      <button
        className={`Next ${nextDisabled ? "DisabledButton" : ""}`}
        onClick={nextClick}
      />
    </div>
  );
}
export default DemoCard;
