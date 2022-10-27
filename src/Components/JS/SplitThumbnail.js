import React from "react";
import "../CSS/SplitThumbnail.css";

function SplitThumbnail(props) {
  const { imgSrc } = props;
  return (
    <div className="SplitThumbnail">
      <img src={imgSrc} className="LeftHalf" alt="" />
      <img src={imgSrc} className="RightHalf" alt="" />
    </div>
  );
}
export default SplitThumbnail;
