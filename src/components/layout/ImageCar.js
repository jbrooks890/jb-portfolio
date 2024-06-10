import { useState, useRef, useEffect } from "react";
import Modal from "../shared/Modal";

export default function ImageCar({
  content,
  handleClick,
  init = 1,
  className,
}) {
  const [active, setActive] = useState(init);
  const [viewing, setViewing] = useState(false);
  const carRef = useRef();
  const contentRef = useRef([]);

  // console.log({ content });

  useEffect(() => {
    contentRef.current?.[active].scrollIntoView();
  }, [active]);

  return (
    <div
      ref={carRef}
      className={`image-car relative flex w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth ${
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
              className="block object-cover"
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
  );
}
