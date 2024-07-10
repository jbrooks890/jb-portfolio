import { useState } from "react";
import Modal from "../shared/Modal";

export default function LightBox({ children, active, toggle }) {
  return (
    <>
      {children}
      {active && (
        <Modal isShowing={active} hide={() => active && toggle()}>
          {children}
        </Modal>
      )}
    </>
  );
}
