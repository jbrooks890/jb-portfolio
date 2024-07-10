import { Fragment } from "react";
import { resumeData } from "../../utility/resume";

export default function Skills({ skills }) {
  const skillGroups = {
    language: "Languages",
    tool: "Tools + Platforms",
    proficiency: "Proficiencies",
    "operating system": "Operating Systems",
  };

  const createLists = () =>
    Object.entries(skillGroups).map(([_type, title], i) => (
      <div key={i} className="contents">
        <div className="text-right text-xl font-semibold tracking-wide">
          {title}
        </div>
        <div>
          {skills
            .filter(({ type }) => type === _type)
            .map(({ name }) => name)
            .join(", ")}
        </div>
      </div>
    ));

  return (
    <div className="skills-body grid grid-cols-[minmax(0,1fr)_minmax(0,3fr)] gap-4 rounded-md bg-black/10 p-4">
      {createLists()}
    </div>
  );
}
