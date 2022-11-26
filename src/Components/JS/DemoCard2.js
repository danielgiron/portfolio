import React, { useState } from "react";
import "../CSS/DemoCard2.css";

import D4 from "../../media/gallery/images/D4.png";

function DemoCard2(props) {
  const { v1Title, v1Body, v2Title, v2Body, Thumbnails } = { props };
  const [Index, setIndex] = useState(1);

  const AboutView = (
    <div className={`View`} id="View1">
      <div className="TextContainer">
        <div className="ViewTitle">Component Name</div>
        <div className="ViewBody">
          This is where a simple description will go for your DemoCard
        </div>
      </div>

      <div className="ImageContainer">
        <img src={D4} />
      </div>
    </div>
  );

  const MoreView = (
    <div className={`View`} id="View2">
      <div className="ViewTitle">Thumbnails</div>
      <div className="ViewBody">
        This is where a simple description will go for your DemoCard
      </div>
      <div className="Thumbnails">
        <img src={D4} />
        <img src={D4} />
        <img src={D4} />
      </div>
    </div>
  );

  const SourceView = (
    <div className={`View`} id="View3">
      <div className="ViewTitle">Source</div>
    </div>
  );

  function returnView() {
    if (Index === 1) {
      return AboutView;
    } else if (Index === 2) {
      return MoreView;
    } else {
      return SourceView;
    }
  }

  return (
    <div className="DemoCard2">
      <div className="Controls">
        <button
          className={`${Index === 1 ? "Active" : ""}`}
          onClick={() => {
            setIndex(1);
          }}
        >
          About
        </button>
        <button
          className={`${Index === 2 ? "Active" : ""}`}
          onClick={() => {
            setIndex(2);
          }}
        >
          More
        </button>
        <button
          className={`${Index === 3 ? "Active" : ""}`}
          onClick={() => {
            setIndex(3);
          }}
        >
          Source
        </button>
      </div>
      <div className="ViewContainer">{returnView()}</div>
      <div className="Tags">
        <span>Render</span>
        <span>Design</span>
      </div>
    </div>
  );
}
export default DemoCard2;
