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
          <h2 className="title">Story time.</h2>
          <p>
            In August of 2010, I left my beloved home of Chicago for Air Force
            basic training. I went on to work as a{" "}
            <span className="nobr">C-130</span> aircraft maintainer for ten
            years before honorably separating in 2020.
          </p>
          <p>
            Despite the industrial nature of my military career, I pursued my
            creative passions. I still wanted to write, draw and/or code
            everyday
            <span className="mdash" />
            and I did (just about). Before separating from active duty, I
            self-published my first novel, established a publishing imprint and
            re-designed my military unit's mascot.
          </p>
          <p>
            I moved to Smyrna, GA in 2018 to be nearer to Atlanta's booming
            industry where I felt my talents would thrive.
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
