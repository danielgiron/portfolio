import React, { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Typewriter from "typewriter-effect";

import Nav from "./Nav";

import "./Interface.css";

function Interface(props) {
  const { theme } = props;
  const pageRef = useRef(null);
  const [page, setPage] = useState("home");

  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const [XP, setXP] = useState(0);
  const [YP, setYP] = useState(0);

  useEffect(() => {
    if (windowWidth >= 1024) {
      onmousemove = function (e) {
        setPosX(e.clientX);
        setPosY(e.clientY);

        setXP(e.clientX);
        setYP(e.clientY);
      };
    }
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
        <div className="designElement" />
        {/* <div className="designElement2">{`${posX}x${posY}`}</div> */}

        <div className="Bars">
          <div className="XP">
            <div
              className="XPBar"
              style={{
                width: `${((XP / windowWidth) * 100).toFixed(1)}%`,
              }}
            />
          </div>{" "}
          <div className="YP">
            <div
              className="YPBar"
              style={{
                width: `${((YP / windowHeight) * 100).toFixed(1)}%`,
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

      <div className="PageContent" ref={pageRef}>
        {window.location.pathname !== "/" ? (
          <>
            <Nav page={page} setPage={setPage} scrollToPage={scrollToPage} />
          </>
        ) : null}
        <Outlet />
        {/* Page component passed in from AnimatedRoutes router */}
      </div>
    </div>
  );
}
export default Interface;
