import { useState } from "react";
import Roles from "./Roles";

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
          <span className="start-date">{`${startDate.month} ${startDate.year}`}</span>
          <span className="to-arrow">
            <svg>
              <use href="#arrow-icon" />
            </svg>
          </span>
          <span className="end-date">
            {current ? "Present" : `${endDate.month} ${endDate.year}`}
          </span>
        </h4>
      </div>
      {roles && <Roles entries={roles} active={open} />}
    </div>
  );
}
