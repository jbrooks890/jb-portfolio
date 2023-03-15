// import { projects } from "../../utility/sources";
import { resumeData } from "../../utility/resume";
import "../../styles/Gallery.css";
import ProjectSnapshot from "../frags/ProjectSnapshot";
import { useSiteMode } from "../shared/ModeProvider";

export default function Gallery() {
  const { projects } = resumeData;
  const [siteMode] = useSiteMode();

  const $projects = projects.filter(project => {
    const { section, featured } = project;
    return section.includes(siteMode) && featured;
  });

  return (
    <section id="gallery" className="site-section flex col middle">
      <h2>Projects</h2>
      <div className="project-list">
        {$projects.map((project, i) => (
          <ProjectSnapshot key={i} entry={project} />
        ))}
      </div>
    </section>
  );
}
