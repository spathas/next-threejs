import state from "../state";

const style = {
  zIndex: 1,
  position: "absolute",
  bottom: "30vh",
  width: "30px",
  height: "30px",
  textAlign: "center",
  fontSize: "20px",
  fontWeight: "bold",
  background: "white",
  borderRadius: "100px",
  border: "1px solid black",
  opacity: 0.7,
  cursor: "pointer",
};

const CameraButtons = () => {
  const sets = {
    1: {
      cameraPos: [9, 2, 4],
      target: [4, 0, 0],
    },
    2: {
      cameraPos: [1, 2, 3],
      target: [-4, 0, 0],
    },
  };

  const clickHandler = (num) => {
    state.cameraPos.set(...sets[num].cameraPos);
    state.target.set(...sets[num].target);
    state.shouldUpdate = true;
  };

  return (
    <>
      <button
        onClick={(e) => clickHandler(2)}
        style={{
          left: "40vw",
          ...style,
        }}
      >
        {"<"}
      </button>
      <button
        onClick={(e) => clickHandler(1)}
        style={{
          right: "40vw",
          ...style,
        }}
      >
        {">"}
      </button>
    </>
  );
};

export default CameraButtons;
