export default function Block({
  type = "normal",
  title,
  untitled,
  tight,
  className,
  children,
  priority,
}) {
  const styles = {
    narrow: `w-[640px]`,
    split: `grid ${
      priority
        ? priority === "left"
          ? "lg:grid-cols-[min-content_minmax(0,1fr)]"
          : "lg:grid-cols-[minmax(0,1fr),min-content]"
        : "lg:grid-cols-2"
    }`,
  };

  return (
    <div
      className={`layout-block ${styles[type]} ${
        !tight ? "mb-4 first:mt-4" : ""
      } ${className ?? ""}`}
    >
      {title && !untitled && <h3>{title}</h3>}
      {children}
    </div>
  );
}
