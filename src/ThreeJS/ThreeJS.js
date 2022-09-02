import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function ThreeJS(props) {
  function Sphere(props) {
    const mesh = useRef(null);
    const { size, color, position, speed } = props;

    const [increasingX, setIncreasingX] = useState(true);
    const [increasingY, setIncreasingY] = useState(true);
    const [increasingZ, setIncreasingZ] = useState(true);

    const MIN_POS_X = -10;
    const MAX_POS_X = 10;
    const MIN_POS_Y = -8;
    const MAX_POS_Y = 8;
    const MIN_POS_Z = -3;
    const MAX_POS_Z = 3;

    useFrame(() => {
      if (mesh.current.position.x + speed / 100 > MAX_POS_X) {
        setIncreasingX(false);
      }
      if (mesh.current.position.x - speed / 100 < MIN_POS_X) {
        setIncreasingX(true);
      }

      if (mesh.current.position.y + speed / 100 > MAX_POS_Y) {
        setIncreasingY(false);
      }
      if (mesh.current.position.y - speed / 100 < MIN_POS_Y) {
        setIncreasingY(true);
      }

      if (mesh.current.position.z + speed / 100 > MAX_POS_Z) {
        setIncreasingZ(false);
      }
      if (mesh.current.position.z - speed / 100 < MIN_POS_Z) {
        setIncreasingZ(true);
      }

      increasingX
        ? (mesh.current.position.x += speed / 100)
        : (mesh.current.position.x -= speed / 100);
      increasingY
        ? (mesh.current.position.y += speed / 100)
        : (mesh.current.position.y -= speed / 100);
      increasingZ
        ? (mesh.current.position.z += speed / 100)
        : (mesh.current.position.z -= speed / 100);
    });

    return (
      <mesh ref={mesh} position={position}>
        <sphereGeometry args={[size, 100]} />
        <meshStandardMaterial color={color} />
      </mesh>
    );
  }
  return (
    <Canvas
      className="ThreeJSFiber_Canvas"
      camera={{ position: [0, 0, 10], fov: 70 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Sphere position={[-6, 6, 0]} color="salmon" size={2} speed={1} />
      <Sphere position={[6, -6, 0]} color="teal" size={2} speed={2} />
      <Sphere position={[0, 0, 2]} color="orange" size={3} speed={3} />
    </Canvas>
  );
}
export default ThreeJS;
