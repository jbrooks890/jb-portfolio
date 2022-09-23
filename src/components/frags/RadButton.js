import { Link } from "react-router-dom";

export default function RadButton({ children, x, y }) {
  // console.log({ x, y });
  const size = 120;
  const center = size / 2;
  const style = {
    top: x - center + "px",
    left: y - center + "px",
    width: size + "px",
    height: size + "px",
  };
  return (
    <button className="rad-btn" style={style}>
      {children}
    </button>
  );
}
