import React from "react";
import "../CSS/NotFound.css";

function NotFound(props) {
  return (
    <div className="NotFound">
      <div className="Header">Error 404 :(</div>
      <div className="Body">
        Sorry! The page you are looking for does not exist...
      </div>
      <button
        onClick={() => {
          window.location.href = "https://www.baldwingiron.com/home";
        }}
      >
        <div /> Back to Home
      </button>
    </div>
  );
}
export default NotFound;
