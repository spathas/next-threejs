import { Suspense } from "react";

import Dragable from "../Dragable";
import Model from "./Model";
import BoundingBox from "./BoundingBox";

const Cars = () => {
  return (
    <Suspense fallback={null}>
      <group rotation={[0, Math.PI, 0]}>
        <Dragable transformGroup>
          <BoundingBox
            position={[-4, 1, 0]}
            dims={[3, 1.5, 6]}
            offset={[0, -0.05, 0]}
          >
            <Model
              path="/tesla_model_3/scene.gltf"
              scale={new Array(3).fill(0.01)}
            />
          </BoundingBox>
        </Dragable>
        <Dragable transformGroup>
          <BoundingBox
            position={[4, 1, 0]}
            dims={[3, 1.5, 6]}
            offset={[0, 0, 0]}
          >
            <Model
              path="/tesla_model_s/scene.gltf"
              scale={new Array(3).fill(1.1)}
            />
          </BoundingBox>
        </Dragable>
      </group>
      <Dragable transformGroup>
        <BoundingBox position={[0, 1, 0]} dims={[1, 2, 1]} offset={[0, -1, 0]}>
          <Model path="/tesla_bot/scene.gltf" scale={new Array(3).fill(1)} />
        </BoundingBox>
      </Dragable>
    </Suspense>
  );
};

export default Cars;
