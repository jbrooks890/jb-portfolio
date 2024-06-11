export default function Button({
  children,
  className,
  size = "md",
  handleClick,
}) {
  const bracket = (first = true) => {
    return (
      <div
        className={`bracket absolute aspect-square border-current ${
          first
            ? "left-0 top-0 rounded-tl-lg border-l-[3px] border-t-[3px]"
            : "bottom-0 right-0 rounded-br-lg border-b-[3px] border-r-[3px]"
        }`}
        style={{
          width: size === "lg" ? "2em" : size === "sm" ? ".5em" : ".75em",
        }}
      />
    );
  };
  return (
    <button
      className={`island relative mx-auto w-fit px-6 py-2 ${className ?? ""}`}
      onClick={(e) => {
        e.preventDefault();
        handleClick?.();
      }}
    >
      {bracket()}
      {children}
      {bracket(false)}
    </button>
  );
}
