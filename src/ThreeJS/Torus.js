import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Torus(props) {
  const theme = props.theme;

  function Knot(props) {
    const mesh = useRef(null);
    const { color, position } = props;

    useFrame(() => {
      mesh.current.rotation.y += 0.005;
      mesh.current.rotation.z -= 0.01;
    });

    return (
      <mesh ref={mesh} position={position}>
        <torusKnotGeometry args={[2.5, 0.75, 256, 32]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.2}
          roughness={0.0}
          // flatShading
        />
      </mesh>
    );
  }

  const pointLights = theme.pointLights.map((light, index) => {
    return (
      <pointLight
        position={light.position}
        color={light.color}
        intensity={light.intensity}
        key={index}
      />
    );
  });

  return (
    <Canvas
      className="ThreeJSFiber_Canvas"
      id="TorusCanvas"
      camera={{ position: [0, 0, 10], fov: 70 }}
    >
      <ambientLight
        intensity={theme.ambientLight_intensity}
        color={theme.ambientLight_color}
      />

      {pointLights}

      <fog attach="fog" color={theme.fog_color} near={6} far={15} />

      <Knot position={[0, 0, 0]} color="#faebd7" />
    </Canvas>
  );
}

export default Torus;
