import { useBox } from "use-cannon";
import { useLoader } from "react-three-fiber";
import * as THREE from "three";

const Box = (props) => {
  const [ref, api] = useBox(() => ({ mass: 1, ...props }));
  const texture = useLoader(
    THREE.TextureLoader,
    process.env.PUBLIC_URL + "/rocks.jpg"
  );

  // useFrame((state) => {
  //   ref.current.rotation.x += 0.01;
  //   ref.current.rotation.y += 0.01;
  // });

  const handlePointerDown = (e) => {
    e.object.active = true;
    if (window.activeMesh) {
      scaleDown(window.activeMesh);
      window.activeMesh.active = false;
    }
    window.activeMesh = e.object;
  };

  const handlePointerEnter = (e) => {
    e.object.scale.x = 1.5;
    e.object.scale.y = 1.5;
    e.object.scale.z = 1.5;
  };

  const handlePointerLeave = (e) => {
    if (!e.object.active) {
      scaleDown(e.object);
    }
  };

  const scaleDown = (obj) => {
    obj.scale.x = 1;
    obj.scale.y = 1;
    obj.scale.z = 1;
  };

  return (
    <mesh
      ref={ref}
      api={api}
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
