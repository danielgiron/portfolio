import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function ThreeJS(props) {
  function Knot(props) {
    const mesh = useRef(null);
    const { color, position } = props;

    useFrame(() => {
      //   mesh.current.rotation.x += 0.005;
      mesh.current.rotation.y += 0.005;
      mesh.current.rotation.z -= 0.01;
    });

    return (
      <mesh ref={mesh} position={position}>
        <torusKnotGeometry args={[2.5, 0.75, 256, 32]} />
        {/* <meshStandardMaterial color={color} /> */}
        <meshPhysicalMaterial
          color={color}
          metalness={0.2}
          roughness={0.0}
          //   clearcoat={0.2}
          //   clearcoatRoughness={0}
          //   reflectivity={1}
          //   emissive={"#fff"}
          //   flatShading
        />
      </mesh>
    );
  }
  return (
    <Canvas
      className="ThreeJSFiber_Canvas"
      camera={{ position: [0, 0, 10], fov: 70 }}
    >
      {/* <ambientLight intensity={1} color={"white"} /> */}
      {/* <pointLight position={[0, 8, 10]} color="white" intensity={2} /> */}

      {/* MacrOS Colors */}
      <pointLight position={[-5, 5, 10]} color="orange" intensity={3} />
      <pointLight position={[5, 3, 10]} color="purple" intensity={3} />
      <fog attach="fog" color="red" near={6} far={15} />

      {/* TASKY Colors */}
      {/* <pointLight position={[-5, 5, 10]} color="#7be880" intensity={3} />
      <pointLight position={[5, 3, 10]} color="#008080" intensity={3} />
      <fog attach="fog" color="black" near={6} far={15} /> */}

      <Knot position={[0, 0, 0]} color="#faebd7" />
    </Canvas>
  );
}
export default ThreeJS;
