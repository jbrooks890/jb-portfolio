import "../../styles/Greeting.css";
import { portfolioData } from "../../utility/portfolio";
import Section from "../layout/Section";
import { useSiteMode } from "../shared/ModeProvider";

export default function Greeting({ pages }) {
  const [mode] = useSiteMode();
  // const { pages } = portfolioData;
  const { flavorTitle: title } = pages.find((entry) => entry.title === mode);

  return (
    <Section id="greeting" className="site-section flex flex-col items-center">
      <div className="salute-wrapper even-split wide">
        <div>
          <h2 className="salute">
            <span>I'm Julian, hi.</span>I strive to unite <em>art</em> and{" "}
            <em>tech</em>.
          </h2>
          <p className="text-2xl">
            I’m {title.toLowerCase()} based in Georgia, just outside of{" "}
            <strong>Atlanta</strong>, where I relentlessly strive to master my
            craft. I take pride in several talents, but regardless of what{" "}
            <em className="hint" data-hint={`${mode} mode`}>
              mode
            </em>{" "}
            I'm in, <strong>my mission is to create</strong> thoughtful,
            memorable work.
          </p>
        </div>
        <div></div>
      </div>
    </Section>
  );
}
