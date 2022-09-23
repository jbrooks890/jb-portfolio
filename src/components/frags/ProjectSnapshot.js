import "../../styles/ProjectSnapshot.css";

export default function ProjectSnapshot({ entry }) {
  const { name, type, description, tech, icon, link, colors } = entry;
  const { key, alt, dark, reverse } = colors;

  console.log({ icon });

  const iconStyle = {
    backgroundColor: reverse ? key : dark ? dark : alt ? alt : "#000",
  };

  return (
    <div className="project-snap">
      <div className="project-gallery"></div>
      <div className="project-caption">
        <div className="project-icon" style={iconStyle}>
          <svg>
            <use href={`#${icon}`} fill={reverse ? alt : key} />
          </svg>
        </div>
        <h3>{name}</h3>
        <p>{description}</p>
        <a className="project-visit-link" href={link} target="_blank">
          Visit
        </a>
      </div>
    </div>
  );
}
