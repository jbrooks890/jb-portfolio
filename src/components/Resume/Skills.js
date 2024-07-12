import { Fragment } from "react";
import { resumeData } from "../../utility/resume";
import Appendix from "../layout/Appendix";

export default function Skills({ skills }) {
  const skillGroups = {
    language: "Languages",
    tool: "Tools + Platforms",
    proficiency: "Proficiencies",
    "operating system": "Operating Systems",
  };

  const appendixContent = Object.entries(skillGroups).map(([_type, title]) => ({
    name: title,
    body: skills
      .filter(({ type }) => type === _type)
      .map(({ name }) => name)
      .join(", "),
  }));

  console.log({ appendixContent });

  return <Appendix contents={appendixContent} />;
}
