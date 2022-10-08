import { useRef, useState } from "react";

export default function ModeSelector({ pages, modeProps, mode }) {
  const [activated, toggleActivated] = useState(false);
  const legend = useRef();
  const cache = useRef();

  // console.log({ mode });
  // console.log(modeProps);

  return (
    <div
      className={`mode-selector button-cache flex mobile ${
        activated ? "activated" : ""
      }`}
    >
      <h4
        ref={legend}
        className="legend"
        style={
          activated ? { maxWidth: legend.current.scrollWidth + "px" } : null
        }
      >
        {mode}
      </h4>
      {pages.map((page, i) => (
        <button
          key={i}
          className={`${page === mode ? "active" : ""} flex`}
          onClick={() => {
            page === mode
              ? toggleActivated(prev => !prev)
              : modeProps.get(page).click();
          }}
        >
          <svg>
            <use href={`#${modeProps.get(page).icon}`} />
          </svg>
        </button>
      ))}
    </div>
  );
}
