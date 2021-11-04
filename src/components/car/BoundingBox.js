import { useBox } from "use-cannon";

const BoundingBox = ({
  position = [0, 0, 0],
  offset = [0, 0, 0],
  dims = [1, 1, 1],
  visible = false,
  children,
}) => {
  const [ref, api] = useBox(() => ({ mass: 1, args: dims, position }));

  return (
    <group ref={ref} api={api}>
      <mesh visible={visible} scale={dims}>
        <boxBufferGeometry />
        <meshBasicMaterial wireframe />
      </mesh>
      <group position={offset}>{children}</group>
    </group>
  );
};

export default BoundingBox;
