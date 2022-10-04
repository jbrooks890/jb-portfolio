import { useState } from "react";
import Roles from "./Roles";
import { abbr } from "../../utility/utility";
import StudyField from "./StudyField";

export default function Entry({ type, entry, active }) {
  const [open, toggleOpen] = useState(active);
  const {
    // EXPERIENCE
    org,
    current,
    roles,
    startDate,
    endDate,
    // EDUCATION
    majors,
    minors,
    other,
    notes,
  } = entry;

  return (
    <div
      className={`${type}-entry dropdown-entry ${open ? "open" : ""} ${
        current ? "current" : ""
      }`}
    >
      <div
        className="entry-header flex"
        onClick={() => toggleOpen(prev => !prev)}
      >
        <h3 className="entry-insitution-name">{org.name}</h3>
        <h4 className="entry-active-dates flex">
          <span className="start-date">{`${abbr(startDate.month)}/${String(
            startDate.year
          ).slice(-2)}`}</span>
          <span className="to-arrow">
            <svg>
              <use href="#arrow-icon" />
            </svg>
          </span>
          <span className="end-date">
            {current
              ? "Present"
              : `${abbr(endDate.month)}/${String(endDate.year).slice(-2)}`}
          </span>
        </h4>
      </div>
      {roles && <Roles entries={roles} active={open} />}
      {type === "education" && (
        <div className={`education-data ${open ? "open" : ""}`}>
          {majors && majors.length > 0 && (
            <StudyField entries={majors} active={open} />
          )}
          {minors && minors.length > 0 && (
            <StudyField entries={minors} active={false} />
          )}
          {other && other.length > 0 && (
            <StudyField entries={other} active={false} />
          )}
          {notes && notes.length > 0 && (
            <ul className="education-note-list">
              {notes.map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}