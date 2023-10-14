import "../../styles/ProjectSnapshot.css";
import ProjectIcon from "./ProjectIcon";
import ProjectImageCar from "./ProjectImageCar";
import SkillCache from "./SkillCache";
import { wrapSkills } from "../../utility/resume";

export default function ProjectSnapshot({ entry }) {
  const { name, type, description, tech, link, icon, images } = entry;
  const $tech = wrapSkills(tech);

  return (
    <div className="project-snap wide">
      <div className="project-gallery flex flex-col items-center">
        <ProjectImageCar images={images} />
      </div>
      <div className="project-caption">
        {icon && <ProjectIcon entry={entry} />}
        <h2 className="project-title">{name}</h2>
        <div className="project-type text-xl font-semibold">{type}</div>
        <SkillCache
          entries={$tech}
          concise={true}
          showIcons={true}
          featured={false}
          filter={false}
        />
        <p>{description}</p>
        {link && (
          <a className="project-visit-link" href={link} target="_blank">
            Visit
          </a>
        )}
      </div>
    </div>
  );
}
