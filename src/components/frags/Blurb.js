import { useEffect, useRef, useState } from "react";
import Carousel from "./Carousel";
import Markdown from "markdown-to-jsx";

export default function Blurb({ mode, content }) {
  const titles = content.map(({ title }) => title);
  const [activeEntry, setActiveEntry] = useState(titles.indexOf(mode) ?? 0);
  const { flavorTitle: title } = content.find(
    ({ title }) => title === titles[activeEntry],
  );
  const [pre, ...$title] = title.split(/\s/);
  const blurbs = content.map(({ blurb }) => <Markdown>{blurb}</Markdown>);
  const carouselRef = useRef();

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
    const current = titles.indexOf(mode);
    current !== activeEntry && setActiveEntry(current);
  }, [mode]);

  const toNext = () => {
    const target = activeEntry + 1;
    const destination = target >= titles.length ? 0 : target;
    setActiveEntry(destination);
  };

  return (
    <>
      <div className="about-intro wide flex flex-col gap-8 px-8 md:grid md:items-center md:p-4">
        <div className="intro-blurb flex flex-col items-center text-justify text-xl">
          <h2 className="title text-center">Story time.</h2>
          <Markdown options={{ forceBlock: true }}>{blurb}</Markdown>
        </div>
        <img
          src={require("../../assets/images/julian_profile_pic.jpg")}
          alt="Headshot of Julian"
          className="headshot order-first rotate-1 rounded mix-blend-multiply drop-shadow-md md:order-none md:col-start-2"
        />
      </div>
      <div className="description flex flex-col self-center bg-nite px-8 py-header text-white md:max-w-screen-md md:rounded-md md:p-8">
        <h2 className="mb-8 text-white">
          <span className="text-[.75em] text-lavender">{pre} </span>
          {$title.join(" ")}
        </h2>
        <Carousel
          ref={carouselRef}
          arr={blurbs}
          index={activeEntry}
          // shift={carouselShift}
          handleChange={(v) => activeEntry !== v && setActiveEntry(v)}
          className="hide-scroll mb-8 text-justify text-xl text-lite md:text-left md:text-lg"
        />

        <div className="about-shift flex items-baseline justify-center">
          <h3
            tabIndex={0}
            onClick={() => toNext()}
            className="m-0 mr-1 cursor-pointer text-day outline-0 duration-100 ease-in hover:text-lite"
          >
            I'm also
          </h3>
          {titles.map((_, i) => {
            const isActive = activeEntry === i;
            return (
              <button
                key={i}
                className={`mr-1 block aspect-square h-2 rounded-[1px] duration-200 ease-out ${
                  isActive
                    ? "active scale-125 cursor-default bg-[red]"
                    : "bg-sundown hover:scale-125 hover:bg-[red]"
                }`}
                disabled={isActive}
                onClick={(e) => {
                  e.preventDefault();
                  !isActive && setActiveEntry(i);
                }}
              ></button>
            );
          })}
        </div>
      </div>
    </>
  );
}
