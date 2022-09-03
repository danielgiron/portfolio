import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Header(props) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <header className="Header">
      <div className="TitleCard">
        <div className="Title">Baldwin Giron</div>
        <div className="Subtitle">Full Stack Developer</div>
      </div>
      <nav>
        <button
          className={`${location.pathname === "/home" ? "Active" : ""}`}
          onClick={() => {
            navigate("/home");
          }}
        >
          Home
        </button>
        <button
          className={`${location.pathname === "/about" ? "Active" : ""}`}
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </button>

        <button
          className={`${location.pathname === "/projects" ? "Active" : ""}`}
          onClick={() => {
            navigate("/projects");
          }}
        >
          Projects
        </button>
        <button
          className={`${location.pathname === "/contact" ? "Active" : ""}`}
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
