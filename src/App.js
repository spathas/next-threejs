import "./App.css";
import { Canvas } from "react-three-fiber";
import { Suspense } from "react";

//Components
import Bulb from "./components/Bulb";
import Floor from "./components/Floor";
import Background from "./components/Background";
import Box from "./components/Box";
import Orbit from "./components/Orbit";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        shadowMap
        style={{ backgroundColor: "black" }}
        camera={{ position: [1, 5, 1] }}
      >
        {/* <fog attach="fog" args={["white", 1, 10]} /> */}
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 3, 0]} />
        <Orbit />
        <axesHelper args={[10]} />
        <Suspense fallback={null}>
          <Box position={[0, 1, 0]} />
        </Suspense>
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Floor position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
