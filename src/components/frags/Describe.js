import { useEffect, useRef, useState } from "react";
export default function Describe({
  header,
  children,
  className,
  openStyles,
  shutStyles,
  headerStyles,
  init = false,
}) {
  const [open, setOpen] = useState(init);
  const drawerRef = useRef();
  useEffect(
    () => open && drawerRef.current?.scrollIntoView({ behavior: "smooth" }),
    [open],
  );
  return (
    <div
      className={`describe rounded-b-md duration-200 ease-out ${
        open ? `open ${openStyles ?? ""}` : `shut ${shutStyles ?? ""}`
      } ${className ?? ""}`}
    >
      <button
        className={`header block w-full cursor-pointer ${headerStyles ?? ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {header}
      </button>
      <div
        ref={drawerRef}
        className={`drawer rounded-b-md duration-200 ease-out ${
          open ? "opacity-100" : "max-h-0 overflow-y-hidden opacity-0"
        }`}
        style={{
          maxHeight: open ? drawerRef.current?.scrollHeight + "px" : undefined,
        }}
      >
        {children}
      </div>
    </div>
  );
}
