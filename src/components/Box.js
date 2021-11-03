import { useRef } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import * as THREE from "three";

const Box = (props) => {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, "/rocks.jpg");

  useFrame((state) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  const handlePointerDown = (e) => {
    console.log(e);
  };

  const handlePointerEnter = (e) => {
    e.object.scale.x = 1.5;
    e.object.scale.y = 1.5;
    e.object.scale.z = 1.5;
  };

  const handlePointerLeave = (e) => {
    e.object.scale.x = 1;
    e.object.scale.y = 1;
    e.object.scale.z = 1;
  };

  return (
    <mesh
      ref={ref}
      {...props}
      castShadow
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial fog={false} map={texture} />
    </mesh>
  );
};

export default Box;
