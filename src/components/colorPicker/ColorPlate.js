import React from "react";
import * as THREE from "three";

const ColorPlate = (props) => {
  const handleClick = (e) => {
    if (!window.activeMesh) return;
    window.activeMesh.material.color = new THREE.Color(
      e.target.style.background
    );
  };

  return (
    <div
      onClick={handleClick}
      style={{ background: props.color, height: 50, width: 50 }}
    />
  );
};

export default ColorPlate;
