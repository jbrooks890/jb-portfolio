import { useState } from "react";
import "../../styles/Sandbox.css";

export default function Sandbox() {
  const [open, setOpen] = useState(false);

  return (
    <section id="sandbox" className="flex col">
      <div className="dropdown-test">
        <div className="dropdown-header" onClick={() => setOpen(prev => !prev)}>Accordion</div>
        <ul className={open ? 'open' : ''}>
          <li>Test 1</li>
          <li>Test 2</li>
          <li>Test 3</li>
          <li>Test 4</li>
          <li>Test 5</li>
        </ul>
      </div>
    </section>
  );
}
