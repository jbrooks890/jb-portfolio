import { useState } from "react";
import Roles from "./Roles";
import { abbr } from "../../utility/utility";

export default function Entry({ entry, active }) {
  const [open, toggleOpen] = useState(active);
  const { org, current, roles, startDate, endDate } = entry;

  return (
    <div
      className={`experience-entry
        ${open ? "open" : ""} 
        ${current ? "current" : ""}`}
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
    </div>
  );
}
