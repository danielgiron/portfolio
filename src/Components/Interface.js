import React, { useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import Typewriter from "typewriter-effect";

import Nav from "./Nav";

import "./Interface.css";

function Interface(props) {
  const { theme } = props;
  const pageRef = useRef(null);
  const [page, setPage] = useState("home");

  const colorSwatch = [theme.ambientLight_color, theme.fog_color];
  theme.pointLights.map((light) => {
    colorSwatch.push(light.color);
    return true;
  });
  function scrollToPage() {
    setTimeout(() => {
      pageRef.current.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  return (
    <div className="Interface">
      <div className="Cover">
        <div className="TitleCard">
          <div className="Title">Baldwin Giron</div>
          <div className="Subtitle">
            <Typewriter
              options={{
                strings: [
                  "Fullstack Developer",
                  "Cat Enthusiast",
                  "Miscellaneous Hobbyist",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="ThemeName">
          <span className="label">Theme</span>
          <span className="value">{theme.name}</span>
        </div>
        <div className="ThemePallete">
          {colorSwatch.map((color) => {
            return (
              <div className="Color" key={color}>
                <div className="Sample" style={{ backgroundColor: color }} />
                <div className="Hexcode">{color}</div>
              </div>
            );
          })}
        </div>

        <Nav page={page} setPage={setPage} scrollToPage={scrollToPage} />
      </div>

      <div className="PageContent" ref={pageRef}>
        <Nav page={page} setPage={setPage} scrollToPage={scrollToPage} />
        {/* {returnPage()} */}
        <Outlet /> {/* Page component passed in from AnimatedRoutes router */}
      </div>
    </div>
  );
}
export default Interface;
