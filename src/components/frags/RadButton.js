import { Link } from "react-router-dom";

export default function RadButton({
  children,
  x,
  y,
  index,
  size,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) {
  // console.log({ x, y });
  // const size = 120;
  const center = size / 2;
  const style = {
    top: x - center + "px",
    left: y - center + "px",
    width: size + "px",
    height: size + "px",
    ["--i"]: index,
  };
  return (
    <button
      className="rad-btn"
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}
