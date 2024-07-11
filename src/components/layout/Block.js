export default function Block({
  type = "normal",
  title,
  untitled,
  tight,
  className,
  children,
  priority,
  narrow,
  wide,
}) {
  return (
    <div
      className={`layout-block ${!tight ? "mb-4 first:mt-4" : ""} ${
        narrow ? "narrow mx-auto md:w-[640px]" : ""
      } ${className ?? ""}`}
    >
      {title && !untitled && <h3>{title}</h3>}
      {children}
    </div>
  );
}
