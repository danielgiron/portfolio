import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./Interface.css";

function Interface(props) {
  return (
    <div className="Interface">
      <Header />
      <Outlet />
      <footer>copyright © Baldwin Giron</footer>
    </div>
  );
}
export default Interface;
