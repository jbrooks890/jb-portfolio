import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
// import "../../styles/Modal.css";
import useMediaQuery from "../hooks/useMediaQuery";

// TUTORIAL: https://upmostly.com/tutorials/modal-components-react-custom-hooks

export default function Modal({
  isShowing,
  hide,
  children,
  className,
  auto,
  naked,
}) {
  const [active, setActive] = useState(false);
  const $MOBILE = useMediaQuery();
  const wrapper = useRef();

  // console.log({ isShowing });
  useEffect(() => {
    if (isShowing) {
      setActive(true);
      document.body.classList.add("modal-lock");
    }
    return () => {
      document.body.classList.remove("modal-lock");
    };
  }, []);

  const closeModal = (e) => {
    setActive(false);
    hide(true);
  };

  return isShowing
    ? createPortal(
        <>
          <div
            className="modal-overlay fixed inset-0 z-[1039] bg-nite/90 mix-blend-multiply backdrop-blur-lg"
            onClick={hide}
          />
          <div
            className={`modal-wrapper pointer-events-none fixed inset-0 isolate z-[1040] flex flex-col items-center justify-center overflow-hidden outline-none md:p-8 ${
              className ?? ""
            }`}
            ref={wrapper}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
            // style={active ? { maxWidth: window.innerWidth + "px" } : null}
          >
            <div className="modal pointer-events-auto relative z-[1040] flex flex-col items-center overflow-hidden">
              {!auto && (
                <button
                  className={`modal-close island rounded-ellipse z-[5000] order-last m-2 bg-midnite text-6xl leading-none text-day duration-200 ease-out hover:opacity-100 md:absolute md:right-0 md:top-0 md:order-none md:bg-transparent md:opacity-25 ${
                    naked
                      ? "h-fit -translate-y-3/4 translate-x-full"
                      : "aspect-square h-20 md:h-16"
                  }`}
                  data-dismiss="modal"
                  aria-label="close"
                  onClick={closeModal}
                >
                  &times;
                </button>
              )}
              {children}
            </div>
          </div>
        </>,
        document.body,
      )
    : null;
}
