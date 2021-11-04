import "./App.css";
import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import { Physics } from "use-cannon";

//Components
import Lights from "./components/lights/Lights";
import Floor from "./components/Floor";
import Background from "./components/Background";
import Orbit from "./components/Orbit";
import Cars from "./components/car/Cars";
import CameraControls from "./components/CameraControls";
import CameraButtons from "./components/CameraButtons";
import Effects from "./components/Effects";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <CameraButtons />
      <Canvas
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false,
        }}
        shadowMap
        style={{ background: "black" }}
        camera={{ position: [7, 7, 7] }}
      >
        <CameraControls />
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Lights />
        <Orbit />
        <axesHelper args={[5]} />
        <Physics>
          <Cars />
          <Floor position={[0, -0.5, 0]} />
        </Physics>
        <Effects />
      </Canvas>
    </div>
  );
}

export default App;
