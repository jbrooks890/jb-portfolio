import { useState, useRef, useEffect } from "react";
import Modal from "../shared/Modal";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-stroke-icon.svg";

export default function ImageCar({ content, handleClick, init, className }) {
  const [active, setActive] = useState(init ?? 0);
  const [viewing, setViewing] = useState(false);
  const carRef = useRef();
  const contentRef = useRef([]);

  // console.log({ content });

  // useEffect(() => {
  //   contentRef.current?.[active].scrollIntoView();
  // }, [active]);
  const pager = (fwd) => {
    return (
      <button
        className={`group-btn z-10 row-start-2 grid aspect-square h-6 place-self-center self-center rounded-[50%] bg-nite/25 p-1 opacity-0 duration-200 ease-out hover:text-lite group-hover:opacity-100 ${
          fwd ? "col-start-3" : "col-start-1 -scale-x-[1]"
        }`}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <Arrow
          className="group-hover/btn:animate-jab w-full overflow-visible stroke-current stroke-2"
          vectorEffect="non-scaling-stroke"
        />
      </button>
    );
  };

  return (
    <div className="image-car-wrap group grid grid-cols-[2rem_minmax(0,1fr)_2rem] grid-rows-[2rem_minmax(0,1fr)_2rem]">
      <div
        ref={carRef}
        className={`image-car hide-scroll relative col-span-full row-span-full flex aspect-video snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth border-2 border-white ${
          className ?? ""
        }`}
      >
        {content.map(({ src, name }, i) => {
          return (
            <div
              key={i}
              ref={(v) => contentRef.current.push(v)}
              className="w-full shrink-0 snap-start"
              onClick={() => handleClick?.() ?? setViewing(true)}
            >
              <img
                src={src}
                alt={`${name} image`}
                className="block h-full w-full object-cover object-top"
              />
            </div>
          );
        })}
        <Modal isShowing={viewing} hide={() => setViewing(false)} naked>
          <img
            src={content[active]?.src}
            className="max-h-[75vh] max-w-screen-lg rounded-md drop-shadow-md"
            onClick={() => setViewing(false)}
          />
        </Modal>
      </div>
      {pager()}
      <div className=" z-10 col-start-2 row-start-3 m-1 flex items-center justify-center gap-2 place-self-center rounded-full bg-nite/25 px-3 py-2 opacity-0 backdrop-blur-sm duration-200 ease-out group-hover:opacity-100">
        {content.map((_, i) => {
          const isActive = active === i;
          return (
            <button
              key={i}
              className="block aspect-square h-2 rounded-[1px] bg-sundown shadow-lg duration-100 ease-out hover:scale-110 hover:bg-red hover:brightness-110 disabled:scale-110 disabled:bg-red disabled:brightness-110"
              onClick={(e) => {
                e.preventDefault();
                setActive(i);
              }}
              disabled={isActive}
            />
          );
        })}
      </div>
      {pager(true)}
    </div>
  );
}
