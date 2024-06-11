// import { projects } from "../../utility/sources";
import { resumeData } from "../../utility/resume";
import "../../styles/Gallery.css";
import ProjectSnapshot from "../frags/ProjectSnapshot";
import { useSiteMode } from "../shared/ModeProvider";
import Section from "../layout/Section";

export default function Gallery() {
  const { projects } = resumeData;
  const [siteMode] = useSiteMode();

  const $projects = projects.filter((project) => {
    const { section, featured } = project;
    return section.includes(siteMode) && featured;
  });

  return (
    <Section
      title="Projects"
      className="site-section flex flex-col items-center"
      titled
    >
      <div className="project-list w-[768px]">
        {$projects.map((project, i) => (
          <ProjectSnapshot key={i} entry={project} />
        ))}
      </div>
    </Section>
  );
}
