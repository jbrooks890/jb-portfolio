import "../../styles/ProjectSnapshot.css";
import ProjectIcon from "./ProjectIcon";

export default function ProjectSnapshot({ entry }) {
  const { name, type, description, tech, link } = entry;

  return (
    <div className="project-snap">
      <div className="project-gallery"></div>
      <div className="project-caption">
        <ProjectIcon entry={entry} />
        <h3>{name}</h3>
        <p>{description}</p>
        <a className="project-visit-link" href={link} target="_blank">
          Visit
        </a>
      </div>
    </div>
  );
}
