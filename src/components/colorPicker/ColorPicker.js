import ColorPlate from "./ColorPlate";

const style = {
  position: "absolute",
  left: 0,
  right: 0,
  top: "20px",
  margin: "auto",
  width: "fit-content",
  display: "flex",
  zIndex: 1,
};

const ColorPicker = () => {
  return (
    <div style={style}>
      <ColorPlate color="blue" />
      <ColorPlate color="yellow" />
      <ColorPlate color="white" />
    </div>
  );
};

export default ColorPicker;
