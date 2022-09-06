import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Hero from "./Hero";
import "./Interface.css";

function Interface(props) {
  return (
    <div className="Interface">
      <Hero outlet={<Outlet />} />

      <div className="Panel">
        <div>Second Panel</div>
        <div>
          Second panel text. Second panel text. Second panel text. Second panel
          text. Second panel text. Second panel text. Second panel text. Second
          panel text. Second panel text. Second panel text. Second panel text.
        </div>
      </div>
    </div>
  );
}
export default Interface;
