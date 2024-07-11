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
  inline,
  className,
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
    <div
      className={`skill-cache-wrapper mb-4 max-w-full overflow-hidden ${
        className ?? ""
      }`}
    >
      {!concise && <h3 className="skill-cache-header">Toolkit</h3>}
      <div
        className={`skill-cache relative flex-wrap justify-center gap-4 self-center ${
          inline ? "inline-flex" : "flex p-4"
        } ${concise ? "concise" : ""}`}
      >
        {featured && bigBracket()}
        {$skills.map(({ name }, i) => (
          <div
            key={i}
            className={`${
              showIcons ? "skill-icon flex flex-col items-center" : ""
            }`}
            data-skill={name}
          >
            <span className="font-tech leading-none">
              {showIcons ? iconMap.get(name) : name}
            </span>
            {!concise && (
              <span className="skill-name text-center font-light">{name}</span>
            )}
          </div>
        ))}
        {featured && bigBracket(true)}
      </div>
    </div>
  );
}
