import { useState } from "react";

// TUTORIAL: https://upmostly.com/tutorials/modal-components-react-custom-hooks

export default function useModal() {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    document.body.classList.toggle("modal-lock");
    setIsShowing(prev => !prev);
  };

  return {
    isShowing,
    toggle,
  };
}
