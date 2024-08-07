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
    frame: `frame max-w-full ${
      narrow
        ? "md:*:max-w-screen-sm lg:*:max-w-screen-md"
        : "[&>*:not(.exempt)]:max-w-5xl"
    } ${tight ? "" : "py-header"} ${fit ? "" : "w-full"}`,
    wide: `wide`,
    narrow: `narrow *:max-w-screen-sm mx-auto`,
  };

  return (
    <section
      className={`section ${styles[type]} relative ${
        bgImg ? `${bgFixed ? "md:bg-fixed" : ""} bg-cover` : "no-bg-img"
      } ${className ?? ""}`}
      style={{ backgroundImage: bgImg ? `url(${bgImg})` : undefined }}
      data-section-title={title}
    >
      {titled && <h2 className="title">{title}</h2>}
      {children}
    </section>
  );
}
