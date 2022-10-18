import "../../styles/Greeting.css";
import { portfolioData } from "../../utility/portfolio";
import { useSiteMode } from "../shared/ModeProvider";

export default function Greeting({ pages }) {
  const [mode] = useSiteMode();
  // const { pages } = portfolioData;
  const { flavorTitle: title } = pages.find(entry => entry.title === mode);

  return (
    <section id="greeting" className="site-section flex col">
      <div className="salute-wrapper flex even-split wide">
        <div>
          <h2 className="salute">
            <span>I'm Julian, hi.</span>Here for the <em>unity</em> of{" "}
            <em>art</em> and <em>tech</em>.
          </h2>
          <p>
            I’m {title.toLowerCase()} based in Georgia, just outside of{" "}
            <strong>Atlanta</strong>. My mission, regardless of what{" "}
            <em className="hint" data-hint={mode}>
              mode
            </em>{" "}
            I'm in, is to create memorable, thoughtful experiences. That's the
            meaning of my signature.
          </p>
        </div>
        <div>Test</div>
      </div>
    </section>
  );
}
