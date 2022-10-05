import { resumeData } from "../../utility/resume";
import { iconMap } from "../../utility/utility";
import "../../styles/SkillCache.css";

export default function SkillCache({ entries, concise, showIcons, featured }) {
  const { skills: $default } = resumeData;
  const skills = !entries || entries.length === 0 ? $default : entries;
  const filtered = skills.filter(skill => skill.category.includes("developer"));
  const primaries = filtered.filter(skill => skill.primary === true);
  const $skills = featured ? primaries : filtered;
  const icons = $skills
    .map(skill => iconMap.get(skill.name))
    .filter(skill => skill);

  return (
    <div className="skill-cache-wrapper">
      {!concise && <h3 className="skill-cache-header">Skills</h3>}
      <ul className={`skill-cache ${concise ? "concise" : ""}`}>
        {$skills.map((skill, i) => (
          <li
            key={i}
            className={showIcons ? "skill-icon" : ""}
            data-skill={skill.name}
          >
            {showIcons ? iconMap.get(skill.name) : skill.name}
            {!concise && <h4 className="skill-name">{skill.name}</h4>}
          </li>
        ))}
      </ul>
    </div>
  );
}
