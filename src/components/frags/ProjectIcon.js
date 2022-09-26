export default function ProjectIcon({ entry }) {
  const { icon, colors } = entry;
  const { key, alt, dark, reverse } = colors;

  const iconStyle = {
    backgroundColor: reverse ? key : dark ? dark : alt ? alt : "#000",
  };

  return (
    <div className="project-icon" style={iconStyle}>
      <svg>
        <use href={`#${icon}`} fill={reverse ? alt : key} />
      </svg>
    </div>
  );
}
