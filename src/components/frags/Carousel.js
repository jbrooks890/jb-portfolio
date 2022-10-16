import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { debounce } from "../../utility/utility";

export default function Carousel({ arr, index = 0, classList = "", shift }) {
  const carousel = useRef();
  const [currIndex, setCurrIndex] = useState(index);

  // useLayoutEffect(() => console.log(carousel), []);

  const shiftCar = (next = currIndex + 1, jump = false) => {
    const carWidth = carousel.current.getBoundingClientRect().width;
    carousel.current.scrollLeft = next * carWidth;
    setCurrIndex(next);
  };

  const carScroll = debounce(() => {
    const carWidth = carousel.current.getBoundingClientRect().width;
    const target = Math.round(carousel.current.scrollLeft / carWidth);
    shift(target);
  }, 250);

  useEffect(() => currIndex !== index && shiftCar(index, true), [index]);

  return (
    <div
      ref={carousel}
      className={`carousel ${classList}`}
      // onClick={e => console.log(e.currentTarget.scrollLeft)}
      onScroll={() => carScroll()}
    >
      {arr.map((entry, i) => (
        <div
          key={i}
          className={currIndex === i ? "active" : ""}
          // onClick={e => console.log(e.target.offsetLeft)}
        >
          {entry}
        </div>
      ))}
    </div>
  );
}
