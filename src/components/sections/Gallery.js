import { projects } from "../../utility/sources";
import "../../styles/Gallery.css";
import ProjectSnapshot from "../frags/ProjectSnapshot";

export default function Gallery() {
  const $projects = projects.filter(project =>
    project.section.includes("Developer")
  );

  return (
    <section id="gallery" className="site-section">
      <h2>Featured Projects</h2>
      <div className="project-list">
        {$projects.map((project, i) => (
          <ProjectSnapshot key={i} entry={project} />
        ))}
      </div>
    </section>
  );
}
