import { useRef } from "react";

export default function RadButton({
  children,
  x,
  y,
  index,
  size,
  offset,
  active,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) {
  const button = useRef();
  // const { width: size } = button.current.getBoundingClientRect();
  const center = size / 2;
  const style = {
    left: x - center + "px",
    top: y - center + "px",
    width: size + "px",
    height: size + "px",
    ["--i"]: index,
  };

  return (
    <button
      ref={button}
      className={`rad-btn ${active ? "active" : ""}`}
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}
