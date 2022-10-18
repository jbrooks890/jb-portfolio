import { useEffect, useState } from "react";
import Carousel from "./Carousel";

export default function Blurb({ mode, content }) {
  const [activeEntry, setActiveEntry] = useState(mode);
  const { flavorTitle: modeTitle } = content.find(
    entry => entry.title === mode
  );
  const { flavorTitle: title } = content.find(
    entry => entry.title === activeEntry
  );
  const [pre, ...$title] = title.split(/\s/);
  const titles = content.map(entry => entry.title);
  const blurbs = content.map(entry => entry.blurb);
  const carouselShift = index => setActiveEntry(titles[index]);

  useEffect(() => {
    mode !== activeEntry && setActiveEntry(mode);
  }, [mode]);

  return (
    <>
      <div className="about-intro flex wide">
        <div className="intro-blurb flex col">
          <h2 className="title">I'm Julian, hi.</h2>
          <p>
            I’m {modeTitle.toLowerCase()} based in Smyrna, GA just outside of
            Atlanta. I’m originally from Chicago, and was previously stationed
            in Florida, near Destin while serving in the Air Force.
          </p>
        </div>
        <div className="headshot-wrap flex">
          <img
            src={require("../../assets/images/julian_profile_pic.jpg")}
            alt="Headshot of Julian"
            className="headshot"
          />
        </div>
      </div>
      <div className="description flex col">
        <h2>
          <span style={{ fontSize: ".75em", color: "var(--lavender)" }}>
            {pre}{" "}
          </span>
          {$title.join(" ")}
        </h2>
        <Carousel
          arr={blurbs}
          index={content.indexOf(
            content.find(entry => entry.title === activeEntry)
          )}
          shift={carouselShift}
        />

        <ul className="about-shift">
          <h3>I'm also</h3>
          {titles.map((title, i) => (
            <li
              key={i}
              className={title === activeEntry ? "active" : ""}
              onClick={() => setActiveEntry(title)}
            ></li>
          ))}
        </ul>
      </div>
    </>
  );
}
