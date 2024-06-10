export default function Section({
  title,
  titled,
  children,
  className,
  type = "frame",
  fit = false,
  tight,
  narrow,
  bgImg,
  bgFixed = false,
}) {
  const styles = {
    hero: `hero w-full h-screen overflow-hidden z-[999] island`,
    frame: `frame ${
      narrow ? "[&>*]:max-w-screen-sm" : "[&>*]:max-w-screen-lg"
    } ${tight ? "" : "py-header"} ${fit ? "" : "w-full"}`,
    wide: `wide`,
    narrow: `narrow [&>*]:max-w-screen-sm mx-auto`,
  };

  return (
    <section
      className={`section ${styles[type]} relative ${
        bgImg ? `${bgFixed ? "md:bg-fixed" : ""} bg-cover` : "no-bg-img"
      } ${className ?? ""}`}
    >
      {titled && <h2>{title}</h2>}
      {children}
    </section>
  );
}
