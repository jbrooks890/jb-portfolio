export default function Button({
  children,
  className,
  size = "md",
  type = "button",
  handleClick,
}) {
  return (
    <button
      className={`island group relative mx-auto w-fit px-6 py-2 before:absolute before:inset-x-2 before:inset-y-2 before:rounded before:bg-transparent before:duration-100 before:ease-in hover:before:inset-x-4 hover:before:inset-y-3 hover:before:bg-nite/5 ${
        className ?? ""
      }`}
      type={type}
      onClick={(e) => {
        type === "button" && e.preventDefault();
        handleClick?.();
      }}
    >
      <div className="bracket-clip group-hover:animate-bracket-pulse absolute inset-0 rounded-lg border-[3px] border-current duration-200 ease-out" />
      {children}
    </button>
  );
}
