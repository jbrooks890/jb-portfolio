import { resumeData } from "../../utility/resume";
import { iconMap } from "../../utility/utility";
// import "../../styles/SkillCache.css";
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
    ? skills.filter((skill) => skill.category.includes(siteMode.toLowerCase()))
    : skills;
  const primaries = filtered.filter((skill) => skill.primary === true);
  const $skills = featured ? primaries : filtered;

  // FILTER SKILLS WITH ICONS ==> RETURN SKILLS
  let skillsWithIcons = $skills.filter((skill) => iconMap.get(skill.name));
  let uniqueIcons = [
    ...new Set(skillsWithIcons.map((skill) => iconMap.get(skill.name))),
  ];

  const bigBracket = (right = false) => (
    <div
      className={`absolute inset-y-0 w-3 border-y-[3px] border-lavender ${
        right
          ? "right-0 rounded-r-md border-r-[3px]"
          : "left-0 rounded-l-md border-l-[3px]"
      }`}
    />
  );

  return (
    <div className="skill-cache-wrapper mb-4">
      {!concise && <h3 className="skill-cache-header">Skills</h3>}
      <ul
        className={`skill-cache relative flex flex-wrap items-center justify-center space-x-2 self-center p-4 text-day ${
          concise ? "concise" : ""
        }`}
      >
        {featured && bigBracket()}
        {$skills.map(({ name }, i) => (
          <li
            key={i}
            className={`${showIcons ? "skill-icon font-tech text-5xl " : ""}`}
            data-skill={name}
          >
            {showIcons ? iconMap.get(name) : name}
            {!concise && <h5 className="skill-name font-body">{name}</h5>}
          </li>
        ))}
        {featured && bigBracket(true)}
      </ul>
    </div>
  );
}
