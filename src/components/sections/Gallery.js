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
      className="site-section flex flex-col items-center bg-white"
    >
      <h2 className="mb-header">Projects</h2>
      <div className="project-list gap-x-8 gap-y-12 md:grid md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:w-[1012px]">
        {$projects.map((project, i) => (
          <ProjectSnapshot key={i} entry={project} />
        ))}
      </div>
    </Section>
  );
}
