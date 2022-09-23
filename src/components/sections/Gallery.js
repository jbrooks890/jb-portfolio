import { projects } from "../../utility/sources";
import "../../styles/Gallery.css";

export default function Gallery() {
  const $projects = projects.filter(project =>
    project.section.includes("Developer")
  );

  return (
    <section id="gallery" className="site-section">
      <h2>Featured Projects</h2>
      <ul className="project-list">
        {$projects.map((project, i) => {
          const { name, type, description, tech } = project;
          return (
            <li key={i}>
              {
                <>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </>
              }
            </li>
          );
        })}
      </ul>
    </section>
  );
}
