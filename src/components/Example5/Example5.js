import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
// import { useSpring, a } from "react-spring/three";

import "./style.scss";
extend({ OrbitControls });

const Spaceship = () => {
  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load("/scene.gltf", setModel);
  }, []);

  return model ? <primitive object={model.scene} /> : null;
};

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls
      autoRotate
      // maxPolarAngle={Math.PI / 3}
      // minPolarAngle={Math.PI / 3} toblock Controls
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  );
};

// const Plane = () => (
//   <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
//     <planeBufferGeometry attach="geometry" args={[100, 100]} />
//     <meshPhysicalMaterial attach="material" color="white" />
//   </mesh>
// );

// const Box = () => {
//   // const meshRef = useRef(); animation
//   const [hovered, setHovered] = useState(false);
//   const [active, setActive] = useState(false);
//   const props = useSpring({
//     scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
//     color: hovered ? "grey" : "orange",
//   });
//   // useFrame(() => {
//   //   meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01;
//   // }); To make animation

//   return (
//     <a.mesh
//       // ref={meshRef} animation
//       onClick={() => setActive(!active)}
//       onPointerOver={() => setHovered(true)}
//       onPointerOut={() => setHovered(false)}
//       scale={props.scale}
//       castShadow
//     >
//       <ambientLight />
//       <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
//       <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
//       <a.meshPhysicalMaterial attach="material" color={props.color} />
//     </a.mesh>
//   );
// };
const Example5 = () => {
  return (
    <>
      <h1 className="SpaceTitle">Hello</h1>
      <Canvas
        camera={{ position: [0, 0, 50] }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[15, 20, 5]} penumbra={1} castShadow />
        {/* <fog attach="fog" args={["rgb(0,0,0, .4)", 5, 40]} /> */}
        <Controls />
        {/* <Box /> */}
        {/* <Plane /> */}
        <Spaceship />
      </Canvas>
    </>
  );
};

export default Example5;
