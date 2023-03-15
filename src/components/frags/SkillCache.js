import { resumeData } from "../../utility/resume";
import { iconMap } from "../../utility/utility";
import "../../styles/SkillCache.css";
import { useSiteMode } from "../shared/ModeProvider";

export default function SkillCache({
  entries,
  concise,
  showIcons,
  featured,
  filter = true,
}) {
  const [siteMode] = useSiteMode();
  const { skills: $default } = resumeData;

  const skills = !entries || entries.length === 0 ? $default : entries;
  const filtered = filter
    ? skills.filter(skill => skill.category.includes(siteMode.toLowerCase()))
    : skills;
  const primaries = filtered.filter(skill => skill.primary === true);
  const $skills = featured ? primaries : filtered;

  // FILTER SKILLS WITH ICONS ==> RETURN SKILLS
  let skillsWithIcons = $skills.filter(skill => iconMap.get(skill.name));
  let uniqueIcons = [
    ...new Set(skillsWithIcons.map(skill => iconMap.get(skill.name))),
  ];

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
