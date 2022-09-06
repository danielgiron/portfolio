import AnimatedRoutes from "./Components/AnimatedRoutes";
import Bounce from "./ThreeJS/Bounce";
import Torus from "./ThreeJS/Torus";

import "./App.css";

function App() {
  return (
    <div className="App" id="App">
      <AnimatedRoutes />
      {/* <Bounce /> */}
      <Torus />
    </div>
  );
}

export default App;
