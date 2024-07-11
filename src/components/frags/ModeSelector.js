import { useEffect, useRef, useState } from "react";

export default function ModeSelector({ pages, buttons, mode, ready }) {
  const [activated, setActivated] = useState(true);
  const legendRef = useRef(),
    cacheRef = useRef(),
    modeButtonsRef = useRef([]),
    wrapperRef = useRef();

  const { Resume, Connect, ...modes } = buttons,
    { ResumeBtn, ConnectBtn } = Object.fromEntries(
      [Resume, Connect].map(({ title, Icon, handleClick }, i) => {
        return [
          title + "Btn",
          <button
            key={i}
            className={`non-mode island aspect-square h-16 rounded-ellipse border-2 border-current p-2 text-evening  ${
              activated
                ? "scale-[0.1] opacity-0"
                : "delay-300 duration-100 ease-out"
            }`}
            onClick={handleClick}
          >
            <Icon className={`max-h-full fill-shade`} />
          </button>,
        ];
      }),
    );

  useEffect(() => activated && setActivated(false), [mode]);

  return (
    <div
      ref={wrapperRef}
      className={`mode-selector-wrapper flex items-center justify-self-center duration-300 ease-out ${
        ready ? "" : "overflow-hidden opacity-0"
      } ${activated ? "activated" : "gap-2"}`}
      style={{ maxHeight: ready ? wrapperRef.current?.clientWidth + "px" : 0 }}
    >
      {ResumeBtn}
      {/* ---------< MODE SELECTOR >--------- */}
      <div
        ref={cacheRef}
        className={`mode-selector button-cache relative flex items-center justify-center rounded-full border-2 p-4 text-center mix-blend-lighten duration-500 ease-out ${
          activated
            ? "activated gap-3 border-red"
            : "unactivated island border-evening"
        }`}
      >
        <h4
          ref={legendRef}
          className={`legend absolute top-0 block -translate-y-1/2 bg-black  text-center text-base leading-none tracking-wide text-red duration-200 ease-in before:absolute before:inset-x-0 before:inset-y-1/4 before:border-x-2 before:border-current ${
            activated ? "px-2" : "overflow-hidden opacity-0"
          }`}
          style={{
            maxWidth: activated
              ? legendRef.current?.scrollWidth + 50 + "px"
              : 0,
          }}
        >
          {mode}
        </h4>
        {Object.entries(modes).map(([title, { Icon, handleClick }], i) => {
          const isActive = title === mode;
          return (
            <button
              key={i}
              ref={(v) => (modeButtonsRef.current[i] = v)}
              className={`island circle linear h-20 duration-100 ${
                isActive
                  ? "active text-red"
                  : `inactive text-lavender/75 ${
                      activated
                        ? "max-w-20 border-2 border-current p-4"
                        : "pointer-events-none -z-10 max-w-0 opacity-0"
                    }`
              }`}
              disabled={!activated && !isActive}
              onClick={() => {
                isActive ? setActivated((prev) => !prev) : handleClick?.();
              }}
            >
              <Icon
                className={`max-h-full max-w-full fill-current duration-200 ease-out ${
                  isActive ? "" : `${activated ? "" : "scale-50 opacity-0"}`
                }`}
                style={{ transitionDelay: 150 + 150 * i + "ms" }}
              />
            </button>
          );
        })}
      </div>
      {ConnectBtn}
    </div>
  );
}
