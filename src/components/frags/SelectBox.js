import { useEffect, useRef, useState } from "react";
// import "../../styles/SelectBox.css";

export default function SelectBox({
  options,
  field,
  multi,
  className,
  displayCss,
  menuCss,
  itemCss,
  drawerMaxHt = 320,
  handleChange,
  required,
  value,
}) {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false),
    toggle = () => setOpen((prev) => !prev);
  const wrapperRef = useRef();
  const listRef = useRef();

  const selectOption = (selection) => {
    setSelected(selection);
    setOpen(false);
  };

  const placeList = () => {
    if (!open) return;
    const wrapper = wrapperRef.current?.getBoundingClientRect(),
      listHeight =
        (listRef.current?.scrollHeight ?? 0) > drawerMaxHt
          ? drawerMaxHt
          : listRef.current.scrollHeight,
      vh = window.innerHeight;
    const { width, height, top, left } = wrapper,
      bottomPos = top + height,
      topPos = top - listHeight,
      pos = bottomPos + listHeight >= vh ? topPos : bottomPos;
    const start = Math.ceil(pos) + "px";

    return {
      top: start,
      left: left + "px", // TODO
      width: width + "px",
    };
  };

  useEffect(() => {
    const handleDismissal = (e) => {
      if (!wrapperRef.current?.contains(e.target)) setOpen(false);
    };
    window.addEventListener("click", handleDismissal);
    return () => {
      window.removeEventListener("click", handleDismissal);
      setOpen(false);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`select-box relative text-inherit ${className ?? ""}`}
    >
      <button
        className={`option-display group grid w-full grid-cols-[minmax(0,1fr)_auto] text-inherit ${
          open ? "open" : "shut"
        } ${displayCss ?? ""}`}
        onClick={(e) => {
          e.preventDefault();
          toggle();
        }}
      >
        <span className="self-center text-left leading-none">{selected}</span>
        <span
          className={`island before:duration-ease-out col-start-2 aspect-square h-full duration-100 ease-out before:leading-none before:duration-100 before:content-['+'] md:text-[1.5em] ${
            open
              ? "before:rotate-45"
              : "opacity-50 before:rotate-0 group-hover:opacity-100"
          }`}
        />
      </button>
      <div
        className={`option-listRef fixed z-50 mt-1 flex flex-col overflow-hidden rounded-md bg-midnite py-1 transition-[max-height] duration-100 ease-out ${
          open ? "open" : "shut max-h-0 opacity-0"
        } ${menuCss ?? ""}`}
        tabIndex={open ? 1 : -1}
        ref={listRef}
        style={{
          maxHeight: open
            ? ((listRef.current?.scrollHeight ?? 0) > drawerMaxHt
                ? drawerMaxHt
                : listRef.current?.scrollHeight) + "px"
            : undefined,
          ...placeList(),
        }}
      >
        {options.map((option, i) => (
          <button
            key={i}
            className={`mx-1 rounded px-4 py-2 text-left duration-100 ease-out hover:bg-lavender hover:text-midnite ${
              itemCss ?? ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              selectOption(option);
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
