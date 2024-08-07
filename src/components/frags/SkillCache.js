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
  const primaries = filtered.filter(({ primary }) => primary);
  const $skills = featured ? primaries : filtered;

  // FILTER SKILLS WITH ICONS ==> RETURN SKILLS
  let skillsWithIcons = $skills.filter(({ name }) => iconMap[name]);
  let uniqueIcons = [
    ...new Set(skillsWithIcons.map(({ name }) => iconMap[name])),
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
    <div className={`skill-cache-wrapper mb-4 max-w-full ${className ?? ""}`}>
      {!concise && <h3 className="skill-cache-header">Toolkit</h3>}
      <div
        className={`skill-cache relative flex-wrap justify-center gap-[inherit] self-center ${
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
              {showIcons ? iconMap[name] : name}
            </span>
            {!concise && (
              <span className="skill-name text-center text-lg font-light">
                {name}
              </span>
            )}
          </div>
        ))}
        {featured && bigBracket(true)}
      </div>
    </div>
  );
}
