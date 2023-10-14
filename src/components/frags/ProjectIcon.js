export default function ProjectIcon({ entry, className }) {
  const { icon, colors } = entry;
  const { key, alt, dark, reverse } = colors;

  const iconStyle = {
    backgroundColor: reverse ? key : dark ? dark : alt ? alt : "#000",
  };

  return (
    <div
      className={`project-icon island aspect-square h-24 rounded-2xl ${
        className ?? ""
      }`}
      style={iconStyle}
    >
      <svg className="w-3/5">
        <use href={`#${icon}`} fill={reverse ? alt : key} />
      </svg>
    </div>
  );
}
