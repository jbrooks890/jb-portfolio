import "../../styles/ProjectSnapshot.css";
import ProjectIcon from "./ProjectIcon";
import ProjectImageCar from "./ProjectImageCar";
import SkillCache from "./SkillCache";
import { wrapSkills } from "../../utility/resume";

export default function ProjectSnapshot({ entry }) {
  const { name, type, description, tech, link, images } = entry;
  const $tech = wrapSkills(tech);

  return (
    <div className="project-snap">
      <div className="project-gallery flex col">
        <ProjectImageCar images={images} />
      </div>
      <div className="project-caption">
        <ProjectIcon entry={entry} />
        <h3>{name}</h3>
        <SkillCache
          entries={$tech}
          concise={true}
          showIcons={true}
          featured={false}
        />
        <p>{description}</p>
        <a className="project-visit-link" href={link} target="_blank">
          Visit
        </a>
      </div>
    </div>
  );
}
