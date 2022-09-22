import { ReactComponent as JB_LOGO } from "../../assets/icons/jb-logo.svg";
import "../../styles/Welcome.css";
import RadButton from "../frags/RadButton";

export default function Welcome({ pages }) {
  const $pages = [...pages, "Resume", "Connect"];
  const rad = document.querySelector("#radial-controller").offsetHeight / 2;
  const ang = 360 / $pages.length;
  // const test = document.querySelector("#radial-controller");

  console.log({ rad, ang });

  return (
    <section id="welcome" className="site-section flex col">
      <div id="radial-controller" className="flex col">
        <h2 id="welcome-logo">
          <JB_LOGO />
        </h2>

        {$pages.map((page, i) => {
          const x = rad * Math.cos(ang * i);
          const y = rad * Math.sin(ang * i);
          console.log(`${page}:`, { x, y });

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
