import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Header.css";

function Header(props) {
  const navigate = useNavigate();
  return (
    <header className="Header">
      <div className="IntroCard">
        <div className="Title">Smear Faced</div>
        <div className="Subtitle">Tale of Two Gluttons</div>
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
