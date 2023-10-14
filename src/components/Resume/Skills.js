import { Fragment } from "react";
import { resumeData } from "../../utility/resume";

export default function Skills({ skills }) {
  const languages = skills.filter((skill) => skill.type === "language");
  const tools = skills.filter((skill) => skill.type === "tool");
  const proficiencies = skills.filter((skill) => skill.type === "proficiency");
  const systems = skills.filter((skill) => skill.type === "operating system");

  const skillGroups = new Map([
    ["Languages", languages],
    ["Tools + Platforms", tools],
    ["Proficiencies", proficiencies],
    ["Operating Systems", systems],
  ]);

  const createLists = () => {
    return [...skillGroups.keys()]
      .filter((name) => skillGroups.get(name).length > 0)
      .map((name, i) => {
        return (
          <div key={i} className="contents">
            <h4 className="text-right">{name}</h4>
            <div>
              {skillGroups
                .get(name)
                .map((skill) => skill.name)
                .join(", ")}
            </div>
          </div>
        );
      });
  };

  return (
    <div className="skills-body grid grid-cols-[minmax(0,1fr)_minmax(0,3fr)] gap-4 rounded-md bg-black/10 p-4">
      {createLists()}
    </div>
  );
}
