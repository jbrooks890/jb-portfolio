import { Link } from "react-router-dom";

export default function RadButton({ children, x, y }) {
  // console.log({ x, y });
  const size = "60px";
  const style = {
    top: x + "px",
    left: y + "px",
    width: size,
    height: size,
  };
  return (
    <button className="rad-btn" style={style}>
      {children}
    </button>
  );
}
