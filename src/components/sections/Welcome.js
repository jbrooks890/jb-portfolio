import { useEffect, useState } from "react";
import { ReactComponent as JB_LOGO } from "../../assets/icons/jb-logo.svg";
import "../../styles/Welcome.css";
import RadButton from "../frags/RadButton";
import { debounce } from "../../utility/utility";

export default function Welcome({ pages }) {
  const $pages = [...pages, "Resume", "Connect"];
  const [activated, setActivated] = useState(false);
  const [dimensions, setDimensions] = useState({
    vw: window.innerWidth,
    vh: window.innerHeight,
  });
  const { vw, vh } = dimensions;
  const vmin = vh < vw ? vh : vw;
  const size = vmin * 0.75;
  const center = size / 2;
  const rad = size / 2;
  const ang = (2 * Math.PI) / $pages.length;
  const style = { width: size, height: size };

  useEffect(() => {
    function handleResize() {
      // console.log(`Resized to: ${window.innerWidth} x ${window.innerHeight}`);
      setDimensions({
        vw: window.innerWidth,
        vh: window.innerHeight,
      });
    }
    // const handleResize = () => debounce($handleResize, 1000);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  function getViewportSize() {
    console.log("TEST");
  }

  // console.log({ rad, ang });
  const icons = new Map([
    ["Developer", "developer-icon"],
    ["Game", "game-icon"],
    ["Writer", "book-icon"],
    ["Artist", ""],
    ["Connect", ""],
    ["Resume", "profile-icon"],
  ]);

  return (
    <section id="welcome" className="site-section flex col">
      <div
        id="radial-controller"
        className={`flex col ${activated ? "activated" : ""}`}
        style={style}
      >
        <h2 id="welcome-logo" onClick={() => setActivated(prev => !prev)}>
          <JB_LOGO />
        </h2>

        <div id="controller-ring">
          {$pages.map((page, i) => {
            const x = center + rad * Math.cos(ang * i);
            const y = center + rad * Math.sin(ang * i);
            // console.log(`${page}:`, { x, y });

            return (
              <RadButton key={i} x={x} y={y} size={vmin / 12.5}>
                {icons.get(page) ? (
                  <svg>
                    <use href={`#${icons.get(page)}`} />
                  </svg>
                ) : (
                  page
                )}
              </RadButton>
            );
          })}
        </div>
      </div>
    </section>
  );
}
