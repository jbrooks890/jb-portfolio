import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "../../styles/Modal.css";
import useMediaQuery from "../hooks/useMediaQuery";

// TUTORIAL: https://upmostly.com/tutorials/modal-components-react-custom-hooks

export default function Modal({ isShowing, hide, children }) {
  const [active, setActive] = useState(false);
  const $MOBILE = useMediaQuery();
  const wrapper = useRef();

  // console.log({ isShowing });
  useEffect(() => isShowing && setActive(true), []);

  const closeModal = e => {
    setActive(false);
    hide(true);
  };

  return isShowing
    ? createPortal(
        <>
          <div className="modal-overlay" />
          <div
            className={`modal-wrapper flex col center ${
              active ? "active" : ""
            }`}
            ref={wrapper}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
            // style={active ? { maxWidth: window.innerWidth + "px" } : null}
            // onClick={closeModal}
          >
            <div className="modal flex col center">
              <div
                className="modal-close flex center"
                data-dismiss="modal"
                aria-label="close"
                onClick={closeModal}
              >
                &times;
              </div>
              {children}
            </div>
          </div>
        </>,
        document.body
      )
    : null;
}
