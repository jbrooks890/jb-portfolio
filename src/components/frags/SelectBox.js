import { useRef, useState } from "react";
import "../../styles/SelectBox.css";

export default function SelectBox({ options, field, classList, onChange }) {
  const [selected, setSelected] = useState(options[0]);
  const [open, toggleOpen] = useState(false);
  const list = useRef();

  const selectOption = selection => {
    setSelected(selection);
    toggleOpen(false);
  };

  return (
    <div
      className={`select-box ${classList.length ? classList.join(" ") : ""}`}
    >
      <select name={field} style={{ display: "none" }} defaultValue={selected}>
        {options.map((option, i) => (
          <option
            key={i}
            value={option}
            // selected={selected === option ? "selected" : null}
          >
            {option}
          </option>
        ))}
      </select>
      <div
        className={`option-display flex ${open ? "open" : ""}`}
        onClick={() => toggleOpen(prev => !prev)}
      >
        {selected}
      </div>
      <ul
        className={`option-list ${open ? "open" : ""}`}
        ref={list}
        style={open ? { maxHeight: list.current.scrollHeight + "px" } : null}
      >
        {options.map((option, i) => (
          <li key={i} onClick={() => selectOption(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
