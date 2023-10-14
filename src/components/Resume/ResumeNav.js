import { useState } from "react";
import { ReactComponent as CLOCK_ICON } from "../../assets/icons/clock-icon.svg";
import { ReactComponent as EDUCATION_ICON } from "../../assets/icons/education-icon.svg";
import { ReactComponent as TOOLS_ICON } from "../../assets/icons/tools-icon.svg";
import { ReactComponent as PUZZLE_ICON } from "../../assets/icons/puzzle-icon.svg";

export default function ResumeNav({ sections }) {
  const [preview, setPreview] = useState("Sections");

  const icons = {
    Skills: TOOLS_ICON,
    Projects: PUZZLE_ICON,
    Education: EDUCATION_ICON,
    Experience: CLOCK_ICON,
  };

  // console.log({ sections });

  return (
    <div
      id="resume-top"
      className="resume-nav-wrapper z-[1000] mx-auto w-fit self-center text-lavender"
    >
      <div className="resume-nav-help text-center font-key text-xs font-normal uppercase tracking-widest">
        {preview}
      </div>
      <nav
        className="resume-nav flex items-center space-x-1 rounded-full border-[3px] border-current p-1"
        onMouseLeave={() => setPreview("Sections")}
      >
        {Object.entries(sections).map(([name, element], i) => {
          const Icon = icons[name];
          // console.log({ element });
          return (
            <button
              key={i}
              onMouseEnter={() => setPreview(name)}
              onClick={() => element?.scrollIntoView({ behavior: "smooth" })}
              className="island group aspect-square h-16 rounded-[50%] border-[3px] border-transparent duration-100 ease-out hover:border-current"
            >
              <Icon className="w-3/5 fill-current duration-100 ease-out group-hover:scale-110 group-hover:fill-day" />
            </button>
          );
        })}
      </nav>
    </div>
  );
}
