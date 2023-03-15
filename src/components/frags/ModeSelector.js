import { useEffect, useRef, useState } from "react";

export default function ModeSelector({ pages, modeProps, mode, ready }) {
  const [activated, toggleActivated] = useState(false);
  const legend = useRef();
  const cache = useRef();
  const button = useRef();
  const wrapper = useRef();

  // console.log({ mode });
  // console.log(modeProps);

  useEffect(() => activated && toggleActivated(false), [mode]);

  return (
    <div
      ref={wrapper}
      className={`control-cache mobile flex middle ${
        activated ? "activated" : ""
      }`}
      style={
        ready
          ? { maxHeight: wrapper.current.getBoundingClientRect().width + "px" }
          : null
      }
    >
      <button
        className="non-mode flex center"
        onClick={modeProps.get("Resume").click}
      >
        <svg>
          <use href={`#${modeProps.get("Resume").icon}`} />
        </svg>
      </button>
      {/* --------- MODE SELECTOR --------- */}
      <div
        ref={cache}
        className={`mode-selector button-cache flex center mobile ${
          activated ? "activated" : ""
        }`}
        // style={activated ? { maxWidth: cache.current.clientWidth + "px" } : null}
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
            ref={button}
            className={`${page === mode ? "active" : ""} flex center`}
            style={{ ["--i"]: i }}
            onClick={() => {
              page === mode
                ? toggleActivated(prev => !prev)
                : modeProps.get(page).click();
            }}
          >
            <svg style={{ ["--i"]: i }}>
              <use href={`#${modeProps.get(page).icon}`} />
            </svg>
          </button>
        ))}
      </div>
      <button
        className="non-mode flex center"
        onClick={modeProps.get("Connect").click}
      >
        <svg>
          <use href={`#${modeProps.get("Connect").icon}`} />
        </svg>
      </button>
    </div>
  );
}
