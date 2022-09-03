import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./Interface.css";

function Interface(props) {
  function randomDisc() {
    const rand = Math.random() * 3 + 1;
  }

  return (
    <div className="Interface">
      <div className="contentWrapper">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
export default Interface;
