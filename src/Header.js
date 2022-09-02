import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Header(props) {
  const navigate = useNavigate();
  return (
    <header className="Header">
      <div className="TitleCard">
        <div className="Title">Baldwin Giron</div>
        <div className="Subtitle">Designer Developer</div>
      </div>
      <nav>
        <button
          onClick={() => {
            navigate("/home");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </button>

        <button
          onClick={() => {
            navigate("/projects");
          }}
        >
          Projects
        </button>
        <button
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact
        </button>
      </nav>
    </header>
  );
}
export default Header;
