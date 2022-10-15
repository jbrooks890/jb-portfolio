import { useState } from "react";

export default function Blurb({ mode, pages, content }) {
  const [activeEntry, setActiveEntry] = useState(mode);
  const { title, blurb } = content.find(entry =>
    entry.section.includes(activeEntry)
  );
  const [pre, ...$title] = title.split(/\s/);

  return (
    <>
      <div className="headshot-wrap flex">
        <img
          src={require("../../assets/images/julian_profile_pic.jpg")}
          alt="Headshot of Julian"
          className="headshot"
        />
      </div>
      <div className="description flex col">
        <h2>
          <span style={{ fontSize: ".75em", color: "var(--lavender)" }}>
            {pre}{" "}
          </span>
          {$title.join(" ")}
        </h2>
        <p>
          Hi, I’m Julian! I’m <em>{title.toLowerCase()}</em> based out of
          Smyrna, GA (20 minutes outside of Atlanta). I’m originally from
          Chicago, but was stationed in Florida, near Destin while serving in
          the Air Force.
        </p>
        <h4>Some background...</h4>
        <p>{blurb}</p>
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
