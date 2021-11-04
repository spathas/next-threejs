import { useState, useEffect } from "react";
import { useThree } from "react-three-fiber";
import { EffectComposer, DepthOfField, GodRays } from "react-postprocessing";

const Effects = () => {
  const [lights, setLights] = useState([]);
  const { scene } = useThree();

  useEffect(() => {
    if (scene.lights && scene.lights.length === 3) setLights(scene.lights);
  }, [scene.lights]);

  return lights ? (
    <EffectComposer>
      <DepthOfField
        focusDistance={0}
        focalLength={0.03}
        bokehScale={2}
        height={480}
      />
      {/* {lights.map((light) => {
        return (
          <GodRays
            key={light.current.uuid}
            sun={light.current}
          />
        );
      })} */}
    </EffectComposer>
  ) : null;
};

export default Effects;
