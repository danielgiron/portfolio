import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "./Interface.css";

function Interface(props) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="Interface">
      <div className="Cover">
        <div className="TitleCard">
          <div className="Title">Baldwin Giron</div>
          <div className="Subtitle">Full Stack Developer</div>
        </div>
        <div className="ThemeName">
          <span className="label">Theme</span>
          <span className="value">{props.theme.name}</span>
        </div>
        <div className="ThemePallete">
          <div className="Color">
            <div
              className="Sample"
              style={{ backgroundColor: props.theme.ambientLight_color }}
            ></div>
            <div className="Hexcode">{props.theme.ambientLight_color}</div>
          </div>
          <div className="Color">
            <div
              className="Sample"
              style={{ backgroundColor: props.theme.fog_color }}
            ></div>
            <div className="Hexcode">{props.theme.fog_color}</div>
          </div>
          {props.theme.pointLights.map((light) => {
            return (
              <div className="Color">
                <div
                  className="Sample"
                  style={{ backgroundColor: light.color }}
                ></div>
                <div className="Hexcode">{light.color}</div>
              </div>
            );
          })}
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
      </div>

      <div className="Panel">
        <Outlet />
      </div>
    </div>
  );
}
export default Interface;
