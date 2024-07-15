import { useState, useRef, useEffect } from "react";
import Modal from "../shared/Modal";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-stroke-icon.svg";
import { debounce } from "../../utility/utility";
import LightBox from "../frags/LightBox";
import { useSiteMode } from "../shared/ModeProvider";

export default function ImageCar({ content, handleClick, init, className }) {
  const [active, setActive] = useState(init ?? 0);
  const [viewing, setViewing] = useState(false);
  const carRef = useRef();
  const contentsRef = useRef([]);
  const [siteMode] = useSiteMode();

  // console.log({ content });
  const scrollToPage = (targetIndex = active) => {
    const target = contentsRef.current?.[targetIndex];
    if (!target) return;
    const { offsetLeft: left } = target;
    carRef.current?.scrollTo({ left });
  };

  const handleScroll = debounce((e) => {
    const { scrollLeft, clientWidth } = e.target;
    const target = Math.round(scrollLeft / clientWidth);
    target !== active && setActive(target);
  }, 50);

  const pager = (fwd) => {
    const next = active + (fwd ? 1 : -1),
      target = next < 0 ? content.length : next >= content.length ? 0 : next;

    return (
      <button
        className={`group-btn z-10 row-start-2 m-1 hidden aspect-square self-center rounded-ellipse bg-nite/25 p-3 opacity-0 duration-200 ease-out hover:text-lite group-hover:opacity-100 md:grid ${
          fwd ? "col-start-3" : "col-start-1 -scale-x-[1]"
        }`}
        onClick={(e) => {
          e.preventDefault();
          scrollToPage(target);
        }}
      >
        <Arrow
          className="max-h-full w-full stroke-current stroke-2 group-hover/btn:animate-jab"
          vectorEffect="non-scaling-stroke"
        />
      </button>
    );
  };

  return (
    <div className="image-car-wrap group grid w-full grid-cols-[3rem_minmax(0,1fr)_3rem] grid-rows-[3rem_minmax(0,1fr)_3rem]">
      <div
        ref={carRef}
        className={`image-car hide-scroll relative col-span-full row-span-2 flex aspect-[4/3] snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth border-2 border-white md:row-span-full ${
          siteMode === "Developer" ? "md:aspect-video" : "md:aspect-square"
        } ${className ?? ""}`}
        onScroll={handleScroll}
      >
        {content.map(({ src, name }, i) => {
          const isActive = active === i;
          return (
            <div
              key={i}
              ref={(v) => contentsRef.current.push(v)}
              className="w-full shrink-0 snap-start"
              onClick={() => handleClick?.() ?? setViewing(true)}
            >
              <img
                src={src}
                alt={`${name} image`}
                loading="lazy"
                className={`block h-full w-full object-cover duration-200 ease-out ${
                  siteMode === "Developer" ? "object-top" : ""
                }`}
              />
            </div>
          );
        })}
      </div>
      {content.length > 1 && (
        <>
          {pager()}
          <div className="z-10 col-start-2 row-start-3 m-1 flex items-center justify-center gap-2 place-self-center rounded-full bg-nite/25 px-3 py-2 backdrop-blur-sm duration-200 ease-out md:opacity-0 md:group-hover:opacity-100">
            {content.map((_, i) => {
              const isActive = active === i;
              return (
                <button
                  key={i}
                  className="block aspect-square h-2 rounded-[1px] bg-sundown shadow-lg duration-100 ease-out hover:scale-110 hover:bg-red hover:brightness-110 disabled:scale-110 disabled:bg-red disabled:brightness-110"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToPage(i);
                  }}
                  disabled={isActive}
                />
              );
            })}
          </div>
          {pager(true)}
        </>
      )}
    </div>
  );
}
