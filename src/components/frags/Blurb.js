import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import Markdown from "markdown-to-jsx";

export default function Blurb({ mode, content }) {
  const [activeEntry, setActiveEntry] = useState(mode);
  const { flavorTitle: title } = content.find(
    (entry) => entry.title === activeEntry,
  );
  const [pre, ...$title] = title.split(/\s/);
  const titles = content.map(({ title }) => title);
  const blurbs = content.map(({ blurb }) => <Markdown>{blurb}</Markdown>);
  const carouselShift = (index) => setActiveEntry(titles[index]);

  const blurb = `In August of 2010, I left my beloved home of Chicago for Air Force
  basic training. I went on to work as a C-130 aircraft maintainer for ten
  years before moving on to pursue a career that more closely aligned
  with my personal and creative ambitions.

  Despite the industrial nature of my military career, I pursued my
  creative passions. I still wanted to write, draw and/or code
  everyday\u2014and I did (just about). Before separating from active duty, I
  self-published my first novel, established a publishing imprint and
  re-designed my military unit's mascot.
  
  I moved to Smyrna, GA in 2018 to be nearer to Atlanta's booming
  industry where I felt my talents would thrive.`;

  useEffect(() => {
    mode !== activeEntry && setActiveEntry(mode);
  }, [mode]);

  return (
    <>
      <div className="about-intro wide grid items-center gap-x-8">
        <div className="intro-blurb flex flex-col items-center text-justify text-xl">
          <h2 className="title text-center">Story time.</h2>
          <Markdown options={{ forceBlock: true }}>{blurb}</Markdown>
        </div>
        <img
          src={require("../../assets/images/julian_profile_pic.jpg")}
          alt="Headshot of Julian"
          className="headshot col-start-2 rotate-1 rounded mix-blend-multiply drop-shadow-md"
        />
      </div>
      <div className="description flex max-w-screen-lg flex-col self-center rounded-md bg-nite p-8 text-white md:max-w-screen-md">
        <h2 className="mb-8 text-white">
          <span className="text-[.75em] text-lavender">{pre} </span>
          {$title.join(" ")}
        </h2>
        <Carousel
          arr={blurbs}
          index={content.findIndex(({ title }) => title === activeEntry) ?? 0}
          // shift={carouselShift}
          className="mb-8 text-left"
        />

        <div className="about-shift flex items-baseline">
          <h3 className="m-0 mr-1 text-day">I'm also</h3>
          {titles.map((title, i) => (
            <button
              key={i}
              className={`mr-1 block aspect-square h-2 rounded-[1px] duration-200 ease-out ${
                title === activeEntry
                  ? "active scale-125 cursor-default bg-[red]"
                  : "bg-sundown hover:scale-125 hover:bg-[red]"
              }`}
              onClick={() => setActiveEntry(title)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}
