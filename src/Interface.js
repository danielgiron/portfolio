import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./Interface.css";

import Disc1 from "./Discs/Disc1";
import Disc2 from "./Discs/Disc2";
import Disc3 from "./Discs/Disc3";

function Interface(props) {
  function randomDisc() {
    const rand = Math.random() * 3 + 1;

    if (Math.floor(rand) === 1) {
      return <Disc1 />;
    } else if (Math.floor(rand) === 2) {
      return <Disc2 />;
    } else if (Math.floor(rand) === 3) {
      return <Disc3 />;
    }
  }

  return (
    <div className="Interface">
      <Header />
      <Outlet />

      {/* <div className="Background">{randomDisc()}</div> */}
    </div>
  );
}
export default Interface;
