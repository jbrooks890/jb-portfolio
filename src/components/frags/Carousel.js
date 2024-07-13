import {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { debounce } from "../../utility/utility";

export default forwardRef(function Carousel(
  { arr, index = 0, className, handleChange, shift, hideControls, hidePagers },
  carouselRef,
) {
  // const [selected, setSelected] = useState(index)
  // const carousel = useRef();
  const sections = useRef([]);

  useEffect(() => {
    const { width } = carouselRef.current.getBoundingClientRect();
    const left = width * index;
    carouselRef.current?.scrollTo({ left });
  }, [index]);

  const handleScroll = debounce((e) => {
    const { scrollLeft, clientWidth } = e.target;
    const targetIndex = Math.round(scrollLeft / clientWidth);
    handleChange(targetIndex);
  }, 50);

  return (
    <div
      ref={carouselRef}
      className={`carousel relative flex snap-x snap-mandatory overflow-x-auto scroll-smooth md:overflow-hidden ${
        className ?? ""
      }`}
      onScroll={handleScroll}
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
});
