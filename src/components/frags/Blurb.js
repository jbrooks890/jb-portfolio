import { useEffect, useState } from "react";
import Carousel from "./Carousel";

export default function Blurb({ mode, pages, content }) {
  const [activeEntry, setActiveEntry] = useState(mode);
  const { title, blurb } = content.find(entry =>
    entry.section.includes(activeEntry)
  );
  const [pre, ...$title] = title.split(/\s/);
  const blurbs = content.map(entry => entry.blurb);
  const carouselShift = index => setActiveEntry(pages[index]);

  useEffect(() => {
    mode !== activeEntry && setActiveEntry(mode);
  }, [mode]);

  return (
    <>
      <div className="about-intro flex">
        <div className="intro-blurb flex col">
          <h2 className="title">I'm Julian, hi.</h2>
          <p>
            I’m {title.toLowerCase()} based out of Smyrna, GA (20 minutes
            outside of Atlanta). I’m originally from Chicago, but was stationed
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
        {/* <p>{blurb}</p> */}

        {/* <div className="carousel">
          {content.map(
            (entry, i) =>
              entry.title !== "General" && <p key={i}>{entry.blurb}</p>
          )}
        </div> */}
        <Carousel
          arr={blurbs}
          index={content.indexOf(
            content.find(entry => entry.section.includes(activeEntry))
          )}
          shift={carouselShift}
        />

        <ul className="about-shift">
          <h3>I'm also</h3>
          {pages.map((page, i) => (
            <li
              key={i}
              className={page === activeEntry ? "active" : ""}
              onClick={() => setActiveEntry(page)}
            ></li>
          ))}
        </ul>
      </div>
    </>
  );
}
