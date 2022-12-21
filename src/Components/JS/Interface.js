import React, { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { shiftTorusOnScroll } from "../../Animations";
import Typewriter from "typewriter-effect";

import Nav from "./Nav";

import "../CSS/Interface.css";

function Interface(props) {
  const { theme } = props;
  const pageRef = useRef(null);
  const [page, setPage] = useState("home");

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // tracking mouse position for animated bar decorations
  const [XPos, setXPos] = useState(0);
  const [YPos, setYPos] = useState(0);

  useEffect(() => {
    if (windowWidth >= 1024) {
      onmousemove = function (e) {
        setXPos(e.clientX);
        setYPos(e.clientY);
      };
    }
    shiftTorusOnScroll();
  }, []);

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
        <div className="Bars">
          <div className="XPos">
            <div
              className="XPosBar"
              style={{
                width: `${((XPos / windowWidth) * 100).toFixed(1)}%`,
              }}
            />
          </div>{" "}
          <div className="YPos">
            <div
              className="YPosBar"
              style={{
                width: `${((YPos / windowHeight) * 100).toFixed(1)}%`,
              }}
            />
          </div>
        </div>

        <div className="TitleCard">
          <div className="Title">Baldwin Giron</div>
          <div className="Subtitle">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Software Developer",
                  "Cat Enthusiast",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>

        <div className="ThemeInfo">
          <div className="ThemeName">
            <span className="label">Theme</span>
            <span className="value">{theme.name}</span>
          </div>
          <div className="Line"> </div>
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
        </div>

        <Nav page={page} setPage={setPage} scrollToPage={scrollToPage} />
      </div>

      <div className="PageContent" ref={pageRef} id="PageContentTray">
        {window.location.pathname !== "/" ? (
          <Nav page={page} setPage={setPage} scrollToPage={scrollToPage} />
        ) : null}
        <Outlet />
        {/* Page component passed in from AnimatedRoutes router */}
      </div>
    </div>
  );
}
export default Interface;
