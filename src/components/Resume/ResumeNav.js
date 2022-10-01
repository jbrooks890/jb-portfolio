import { useState } from "react";

export default function ResumeNav({ sections }) {
  const [preview, setPreview] = useState("Sections");
  const icons = new Map([
    ["Skills", "#tools-icon"],
    ["Projects", "#puzzle-icon"],
    ["Education", "#education-icon"],
    ["Experience", "#clock-icon"],
  ]);

  return (
    <div id="resume-top" className="resume-nav-wrapper">
      <div className="resume-nav-help">{preview}</div>
      <nav
        className="resume-nav flex"
        onMouseLeave={() => setPreview("Sections")}
      >
        {sections.map((section, i) => (
          <a
            key={i}
            href={`#resume-${section.toLowerCase()}`}
            onMouseEnter={() => setPreview(section)}
          >
            {icons.get(section) ? (
              <svg>
                <use href={icons.get(section)} />
              </svg>
            ) : (
              section
            )}
          </a>
        ))}
      </nav>
    </div>
  );
}
