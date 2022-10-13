import { useState } from "react";
import useMediaQuery from "./useMediaQuery";

// TUTORIAL: https://upmostly.com/tutorials/modal-components-react-custom-hooks

export default function useModal() {
  const [isShowing, setIsShowing] = useState(false);
  const $MOBILE = useMediaQuery();

  const toggle = (closing = false) => {
    // console.log({ closing });
    document.body.classList.toggle($MOBILE ? "side-menu" : "modal-lock");
    if ($MOBILE) {
      closing
        ? document.body.addEventListener(
            "transitionend",
            () => setIsShowing(prev => !prev),
            { once: true }
          )
        : setIsShowing(prev => !prev);
    } else {
      setIsShowing(prev => !prev);
    }
  };

  return {
    isShowing,
    toggle,
  };
}
