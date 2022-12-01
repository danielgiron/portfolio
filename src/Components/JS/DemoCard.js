import React, { useState } from "react";
import "../CSS/DemoCard.css";

function DemoCard(props) {
  const { v1Title, v1Body, v2Title, v2Body, images, tags } = props;
  const [Index, setIndex] = useState(1);

  const thumbnails = images?.map((img, index) => {
    return (
      <img
        src={img}
        key={index}
        alt={`Thumbnail ${index}`}
        // open expanded image in new tab
        onClick={() => {
          window.open(img);
        }}
      />
    );
  });
  const tagList = tags?.map((tag, index) => {
    return <span key={index}>{tag}</span>;
  });

  const AboutView = (
    <div className={`View`} id="View1">
      <div className="TextContainer">
        <div className="ViewTitle">{v1Title ? v1Title : "Title One"}</div>
        <div className="ViewBody">
          {v1Body
            ? v1Body
            : "This is where a simple description will go for your DemoCard"}
        </div>
      </div>

      <div className="ImageContainer">{thumbnails ? thumbnails[0] : ""}</div>
    </div>
  );

  const MoreView = (
    <div className={`View`} id="View2">
      <div className="ViewTitle">{v2Title ? v2Title : "Thumbnails"}</div>
      <div className="ViewBody">
        {v2Body ? v2Body : "A short message for the second slide"}
      </div>
      <div className="Thumbnails">{thumbnails}</div>
    </div>
  );

  const SourceView = (
    <div className={`View`} id="View3">
      <div className="ViewTitle">Source Info</div>
      <div className="ViewBody">
        Coming soon! For more on this entry or how to use it, send me a message
        via the Contact link above.
      </div>
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
    <div className="DemoCard">
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
      <div className="Tags">{tagList}</div>
    </div>
  );
}
export default DemoCard;
