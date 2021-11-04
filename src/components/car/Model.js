import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Model = (props) => {
  const model = useLoader(GLTFLoader, process.env.PUBLIC_URL + props.path);

  let mixer;
  if (model.animations.length > 0) {
    mixer = new THREE.AnimationMixer(model.scene);
    model.animations.forEach((animation) => {
      const action = mixer.clipAction(animation);
      action.play();
    });
  }

  useFrame((scene, delta) => mixer?.update(delta));

  model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.recieveShadow = true;
      child.material.side = THREE.FrontSide;
    }
  });

  return <primitive object={model.scene} scale={props.scale} />;
};

export default Model;
