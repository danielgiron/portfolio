import React, { useState, useRef } from "react";

import Nav from "./Nav";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Projects from "../Pages/Projects";

import "./Interface.css";

function Interface(props) {
  const pageRef = useRef(null);
  const [page, setPage] = useState("home");

  function returnPage() {
    if (page === "home") {
      return <Home />;
    } else if (page === "about") {
      return <About />;
    } else if (page === "contact") {
      return <Contact />;
    } else if (page === "projects") {
      return <Projects />;
    }
  }

  const scrollToPage = () => pageRef.current.scrollIntoView();

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

        <Nav page={page} setPage={setPage} scrollToPage={scrollToPage} />
      </div>

      <div className="PageContent" ref={pageRef}>
        <Nav page={page} setPage={setPage} scrollToPage={scrollToPage} />

        {returnPage()}
      </div>
    </div>
  );
}
export default Interface;
