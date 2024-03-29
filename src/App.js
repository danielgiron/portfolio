import AnimatedRoutes from "./Components/JS/AnimatedRoutes";
import Torus from "./ThreeJS/Torus";
import { useEffect, useState } from "react";
import { blankTheme, macrosTheme, taskyTheme } from "./Themes";

import "./App.css";

function App() {
  // Set default path location to /home
  if (window.location.pathname === "/") {
    window.location.pathname = "/home";
  }
  const [theme, setTheme] = useState(taskyTheme);

  function randomTheme() {
    const themes = [blankTheme, macrosTheme, taskyTheme];
    const rand = Math.floor(Math.random() * themes.length);
    return themes[rand];
  }

  useEffect(() => {
    setTheme(randomTheme());
  }, []);

  return (
    <div className="App" id="App">
      <AnimatedRoutes theme={theme} />
      {window.location.pathname !== "/gallery" ? <Torus theme={theme} /> : null}
    </div>
  );
}

export default App;
