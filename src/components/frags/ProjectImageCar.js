import { useState } from "react";

export default function ProjectImageCar({ images }) {
  const [active, setActive] = useState(0);

  const scroll = dest => {
    const target =
      active + dest >= images.length
        ? 0
        : active + dest < 0
        ? images.length - 1
        : active + dest;
    // console.log({ target });
    setActive(target);
  };

  return (
    <>
      <div className="image-wrapper flex">
        {images.map((image, i) => {
          return (
            <img
              key={i}
              className={`project-img ${active === i ? "active" : ""}`}
              src={require(`../../assets/images/projects/${image}`)}
              onClick={() => scroll(1)}
            />
          );
        })}
        <span className="scroller prev" onClick={() => scroll(-1)}></span>
        <span className="scroller next" onClick={() => scroll(1)}></span>
      </div>
      <ul className="project-images-pager flex">
        {images.map((_, i) => (
          <li
            key={i}
            className={active === i ? "active" : ""}
            onClick={() => setActive(i)}
          ></li>
        ))}
      </ul>
    </>
  );
}
