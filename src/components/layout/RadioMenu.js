import { useRef, useMemo, useEffect } from "react";
import { debounce } from "../../utility/utility";
import useMediaQuery from "../hooks/useMediaQuery";

export default function RadioMenu({
  contents,
  rotation = 0,
  sequence,
  className,
  buttonCss,
  buttonStyles,
}) {
  const menuRef = useRef();
  const buttonRefs = useRef([]);
  const { vw, vh, vmin, vavg, size, rad, ang } = useMemo(() => {
    const vw = window.innerWidth,
      vh = window.innerHeight,
      vmin = vh < vw ? vh : vw,
      vavg = (vh + vw) / 2,
      size = vmin * 0.8,
      rad = size / 2,
      ang = (2 * Math.PI) / contents.length;

    return {
      vw,
      vh,
      vmin,
      vavg,
      size,
      rad,
      ang,
    };
  }, [window.innerHeight, window.innerHeight]);
  // const { vw, vh } = dimensions;
  // console.log({ size });

  const style = { width: size, height: size };
  // -------------------------------------------------------
  const $MOBILE = useMediaQuery();

  /*   const handleResize = debounce(() =>
    setDimensions({
      vw: window.innerWidth,
      vh: window.innerHeight,
    }),
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }); */

  return (
    <div
      ref={menuRef}
      className={`radio-menu absolute inset-0 duration-200 ease-out ${
        className ?? ""
      }`}
    >
      {contents.map(
        (
          { Icon, handleClick, handleMouseEnter, handleMouseLeave, disabled },
          i,
        ) => {
          const spacing = ang * i;
          const x = rad + rad * Math.cos(spacing);
          const y = rad + rad * Math.sin(spacing);

          const size = Math.floor(vavg * 0.06);
          const btnCenter = size / 2;
          const style = {
            left: x - btnCenter + "px",
            top: y - btnCenter + "px",
            width: size + "px",
            ["--i"]: i,
          };

          if (buttonStyles)
            Object.assign(
              style,
              typeof buttonStyles === "function"
                ? buttonStyles(i)
                : buttonStyles,
            );
          // console.table({ title, center, rad, offset, x, y });

          return (
            <button
              key={i}
              ref={(v) => (buttonRefs.current[i] = v)}
              className={`rad-btn island absolute aspect-square rounded-[50%] fill-current ${
                typeof buttonCss === "string"
                  ? buttonCss
                  : typeof buttonCss === "function"
                  ? buttonCss?.(i)
                  : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleClick?.();
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              disabled={disabled}
              style={style}
            >
              <Icon className="max-h-full" />
            </button>
          );
        },
      )}
    </div>
  );
}
