import React, { Suspense, useState, useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Canvas, useThree, useFrame } from "react-three-fiber";

import "./Example9.scss";

const Avatar = () => {
  const [model, setModel] = useState();
  const texture = useMemo(() => new THREE.TextureLoader().load("texture.jpg"), []);

  useMemo(() => {
    new OBJLoader().load("people.obj", (object) => {
      object.scale.set(4, 4, 4);
      object.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material.map = texture;
        }
      });
      object.position.y = -400;
      setModel(object);
    });
  }, [texture]);
  return model ? <primitive object={model} /> : null;
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
      // minPolarAngle={Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  );
};

const Example9 = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 2000);
  }, []);
  return (
    <div className="Ex9Wrapper" style={{ opacity: isLoaded ? "1" : 0, top: isLoaded ? "6vh" : "10vh" }}>
      <h1 className="SectionTitle">Moben Profil</h1>
      <div className="ContentWrapper">
        <div className="Section">
          <h3>Nom</h3>
          <h2>Alain</h2>
          <h3>Prénom</h3>
          <h2>Gilles</h2>
          <h3>Entreprise</h3>
          <h2>Framatome</h2>
          <h3>Profession</h3>
          <h2>Inspecteur</h2>
        </div>
        <Canvas
          style={{
            width: "33%",
            height: "100%",
            zIndex: "1",
          }}
          camera={{ position: [600, 0, 0] }}
          onCreated={({ gl }) => {
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
          }}
        >
          <ambientLight intensity={0.8} />
          {/* <pointLight position={[40, 200, 1]} penumbra={0.2} /> */}
          <Controls />
          <Avatar />
        </Canvas>

        <div className="Section Right">
          <h3>Telephone</h3>
          <h2>06.38.10.13.05</h2>
          <h3>Email</h3>
          <h2>g.allain@fram.com</h2>
          <h3>Adresse</h3>
          <h2>
            5 rue Paradis <br />
            13001 Marseille
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Example9;
