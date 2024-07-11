import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { debounce } from "../../utility/utility";

export default function Carousel({
  arr,
  index = 0,
  className,
  shift,
  hideControls,
  hidePagers,
}) {
  const carousel = useRef();
  const sections = useRef([]);

  useEffect(() => {
    const { width } = carousel.current.getBoundingClientRect();
    const left = width * index;
    carousel.current?.scrollTo({ left });
  }, [index]);

  const handleScroll = (e) => {
    const carousel = e.currentTarget;
    const { width } = carousel.getBoundingClientRect();
  };

  return (
    <div
      ref={carousel}
      className={`carousel relative flex snap-x snap-mandatory overflow-x-auto scroll-smooth md:overflow-hidden ${
        className ?? ""
      }`}
      // onClick={e => console.log(e.currentTarget.scrollLeft)}
      // onScroll={() => carScroll()}
    >
      {arr.map((entry, i) => {
        const isActive = index === i;
        return (
          <div
            key={i}
            ref={(v) => (sections.current[i] = v)}
            className={`relative w-full shrink-0 snap-start duration-200 ease-out ${
              isActive ? "active" : "inactive md:opacity-0"
            }`}
          >
            {entry}
          </div>
        );
      })}
    </div>
  );
}
