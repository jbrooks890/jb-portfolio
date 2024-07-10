export default function Button({
  children,
  className,
  size = "md",
  handleClick,
}) {
  const bracket = (first = true) => {
    return (
      <div
        className={`bracket absolute aspect-square border-current duration-200 ease-out ${
          first
            ? "left-0 top-0 rounded-tl-lg border-l-[3px] border-t-[3px] group-hover:left-2 group-hover:top-1"
            : "bottom-0 right-0 rounded-br-lg border-b-[3px] border-r-[3px] group-hover:bottom-1 group-hover:right-2"
        }`}
        style={{
          width: size === "lg" ? "2em" : size === "sm" ? ".5em" : ".6em",
        }}
      />
    );
  };
  return (
    <button
      className={`island group relative mx-auto w-fit px-6 py-2 before:absolute before:inset-x-2 before:inset-y-2 before:rounded before:bg-transparent before:duration-100 before:ease-in hover:before:inset-x-4 hover:before:inset-y-3 hover:before:bg-nite/5 ${
        className ?? ""
      }`}
      onClick={(e) => {
        e.preventDefault();
        handleClick?.();
      }}
    >
      {/* <div className="bracket-clip absolute inset-0 rounded-lg border-[3px] border-current" /> */}
      {bracket()}
      {children}
      {bracket(false)}
    </button>
  );
}
