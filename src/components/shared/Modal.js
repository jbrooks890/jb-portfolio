import { createPortal } from "react-dom";
import "../../styles/Modal.css";

// TUTORIAL: https://upmostly.com/tutorials/modal-components-react-custom-hooks

export default function Modal({ isShowing, hide, children }) {
  return isShowing
    ? createPortal(
        <>
          <div className="modal-overlay" onClick={hide} />
          <div
            className="modal-wrapper flex col"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
            // onClick={hide}
            onKeyDown={e => (e.key === "Escape" ? hide() : null)}
          >
            <div className="modal">
              <div
                className="modal-close flex"
                data-dismiss="modal"
                aria-label="close"
                onClick={hide}
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
