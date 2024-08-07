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
      className={`radio-menu absolute inset-0 rounded-ellipse duration-200 ease-out ${
        className ?? ""
      }`}
    >
      {contents.map((entry, i) => {
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
            typeof buttonStyles === "function" ? buttonStyles(i) : buttonStyles,
          );

        return (
          <div
            key={i}
            ref={(v) => (buttonRefs.current[i] = v)}
            className={`rad-item absolute aspect-square ${
              typeof buttonCss === "string"
                ? buttonCss
                : typeof buttonCss === "function"
                ? buttonCss?.(i)
                : "island rounded-ellipse"
            }`}
            style={style}
          >
            {entry}
          </div>
        );
      })}
    </div>
  );
}
