import { Fragment } from "react";
import { resumeData } from "../../utility/resume";

export default function Skills({ skills }) {
  const languages = skills.filter(skill => skill.type === "language");
  const tools = skills.filter(skill => skill.type === "tool");
  const proficiencies = skills.filter(skill => skill.type === "proficiency");
  const systems = skills.filter(skill => skill.type === "operating system");

  const skillGroups = new Map([
    ["Languages", languages],
    ["Tools + Platforms", tools],
    ["Proficiencies", proficiencies],
    ["Operating Systems", systems],
  ]);

  const createLists = () => {
    return [...skillGroups.keys()]
      .filter(name => skillGroups.get(name).length > 0)
      .map((name, i) => {
        return (
          <Fragment key={i}>
            <h3>{name}</h3>
            <p>
              {skillGroups
                .get(name)
                .map(skill => skill.name)
                .join(", ")}
            </p>
          </Fragment>
        );
      });
  };

  return <div className="skills-body grid">{createLists()}</div>;
}
