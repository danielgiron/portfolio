import React from "react";

import reactSVG from "./react.svg";
import reduxSVG from "./redux.svg";
import nodeSVG from "./nodedotjs.svg";
import expressSVG from "./express.svg";
import npmSVG from "./npm.svg";
import htmlSVG from "./html5.svg";
import cssSVG from "./css3.svg";
import javascriptSVG from "./javascript.svg";
import githubSVG from "./github.svg";
import mongoSVG from "./mongodb.svg";
import herokuSVG from "./heroku.svg";
import netlifySVG from "./netlify.svg";
import threejsSVG from "./threedotjs.svg";
import bootstrapSVG from "./bootstrap.svg";

export const react = (
  <img src={reactSVG} className="icon" key="React" alt="React" />
);
export const redux = (
  <img src={reduxSVG} className="icon" key="Redux" alt="Redux" />
);
export const node = (
  <img src={nodeSVG} className="icon" key="Node.js" alt="Node.js" />
);
export const express = (
  <img src={expressSVG} className="icon" key="Express" alt="Express" />
);

export const npm = <img src={npmSVG} className="icon" key="npm" alt="npm" />;

export const html = (
  <img src={htmlSVG} className="icon" key="HTML5" alt="HTML5" />
);
export const css = <img src={cssSVG} className="icon" key="CSS3" alt="CSS3" />;

export const javascript = (
  <img src={javascriptSVG} className="icon" key="JavaScript" alt="JavaScript" />
);
export const github = (
  <img src={githubSVG} className="icon" key="GitHub" alt="GitHub" />
);
export const mongo = (
  <img src={mongoSVG} className="icon" key="Mongo" alt="Mongo DB" />
);
export const heroku = (
  <img src={herokuSVG} className="icon" key="Heroku" alt="Heroku" />
);
export const netlify = (
  <img src={netlifySVG} className="icon" key="Netlify" alt="Netlify" />
);
export const threejs = (
  <img src={threejsSVG} className="icon" key="Three.js" alt="Three.js" />
);
export const bootstrap = (
  <img src={bootstrapSVG} className="icon" key="Bootstrap" alt="Bootstrap" />
);

export const icons = {
  html,
  css,
  javascript,
  react,
  node,
  redux,
  express,
  npm,
  github,
  mongo,
  heroku,
  netlify,
  bootstrap,
  threejs,
};

export default icons;
