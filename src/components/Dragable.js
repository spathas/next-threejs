import { useState, useRef, useEffect } from "react";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { useThree, extend } from "react-three-fiber";
extend({ DragControls });

const Dragable = (props) => {
  const [children, setChildren] = useState([]);
  const groupRef = useRef();
  const controlsRef = useRef();
  const { camera, gl, scene } = useThree();

  useEffect(() => {
    setChildren(groupRef.current.children);
  }, []);

  useEffect(() => {
    controlsRef.current.addEventListener(
      "hoveron",
      () => (scene.orbitControls.enabled = false)
    );
    controlsRef.current.addEventListener(
      "hoveroff",
      () => (scene.orbitControls.enabled = true)
    );
    controlsRef.current.addEventListener("dragstart", (e) => {
      console.log(e.object);
      e.object.api?.mass.set(0);
    });
    controlsRef.current.addEventListener("dragend", (e) =>
      e.object.api?.mass.set(1)
    );
    controlsRef.current.addEventListener("drag", (e) => {
      e.object.api?.position.copy(e.object.position);
      e.object.api?.velocity.set(0, 0, 0);
    });
  }, [children, scene]);

  return (
    <group ref={groupRef}>
      <dragControls
        transformGroup={props.transformGroup}
        ref={controlsRef}
        args={[children, camera, gl.domElement]}
      />
      {props.children}
    </group>
  );
};

export default Dragable;
