// import { projects } from "../../utility/sources";
import { resumeData } from "../../utility/resume";
import "../../styles/Gallery.css";
import ProjectSnapshot from "../frags/ProjectSnapshot";

export default function Gallery() {
  const { projects } = resumeData;
  const $projects = projects.filter(project => {
    const { section, featured } = project;
    return section.includes("Developer") && featured;
  });

  return (
    <section id="gallery" className="site-section flex col">
      <h2>Projects</h2>
      <div className="project-list">
        {$projects.map((project, i) => (
          <ProjectSnapshot key={i} entry={project} />
        ))}
      </div>
    </section>
  );
}
