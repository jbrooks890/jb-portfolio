import { useState } from "react";

export default function ProjectImageCar({ images }) {
  const [active, setActive] = useState(0);
  const { location, entries } = images;

  const scroll = dest => {
    const target =
      active + dest >= entries.length
        ? 0
        : active + dest < 0
        ? entries.length - 1
        : active + dest;
    // console.log({ target });
    setActive(target);
  };

  return (
    <>
      <div className="image-wrapper flex middle">
        {entries.map((image, i) => {
          return (
            <img
              key={i}
              className={`project-img ${active === i ? "active" : ""}`}
              src={require(`../../assets/images/${location}/${image}`)}
              onClick={() => scroll(1)}
            />
          );
        })}
        {entries.length > 1 && (
          <>
            <span className="scroller prev" onClick={() => scroll(-1)}></span>
            <span className="scroller next" onClick={() => scroll(1)}></span>
          </>
        )}
      </div>
      <ul
        className={`project-images-pager flex center ${
          entries.length <= 1 ? "hide" : ""
        }`}
      >
        {entries.map((_, i) => (
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
