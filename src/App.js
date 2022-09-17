import AnimatedRoutes from "./Components/AnimatedRoutes";
import Torus from "./ThreeJS/Torus";

import { useEffect, useState } from "react";

import { blankTheme, macrosTheme, taskyTheme } from "./Themes";

import "./App.css";

function App() {
  const [theme, setTheme] = useState(taskyTheme);

  function randomTheme() {
    const themes = [blankTheme, macrosTheme, taskyTheme];
    // const themes = [blankTheme];
    const rand = Math.floor(Math.random() * themes.length);
    return themes[rand];
  }

  useEffect(() => {
    setTheme(randomTheme());
  }, []);

  return (
    <div className="App" id="App">
      <AnimatedRoutes theme={theme} />

      <Torus theme={theme} />
    </div>
  );
}

export default App;
