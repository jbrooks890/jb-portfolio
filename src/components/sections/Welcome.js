import { ReactComponent as JB_LOGO } from "../../assets/icons/jb-logo.svg";
import "../../styles/Welcome.css";
import RadButton from "../frags/RadButton";

export default function Welcome({ pages }) {
  const $pages = [...pages, "Resume", "Connect"];
  const { innerHeight: vh, innerWidth: vw } = window;
  const vmin = vh < vw ? vh : vw;
  const size = vmin * 0.75;
  const center = size / 2;
  const rad = size / 2;
  const ang = (2 * Math.PI) / $pages.length;
  const style = { width: size, height: size };

  // console.log({ rad, ang });

  return (
    <section id="welcome" className="site-section flex col">
      <div id="radial-controller" className="flex col" style={style}>
        <h2 id="welcome-logo">
          <JB_LOGO />
        </h2>

        {$pages.map((page, i) => {
          const x = center + rad * Math.cos(ang * i);
          const y = center + rad * Math.sin(ang * i);
          // console.log(`${page}:`, { x, y });

          return (
            <RadButton key={i} x={x} y={y}>
              {page}
            </RadButton>
          );
        })}
      </div>
    </section>
  );
}
