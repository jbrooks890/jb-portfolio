import { Fragment, useRef } from "react";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-stroke-icon.svg";
import List from "../layout/List";

export default function Roles({ entries }) {
  return (
    <div className={`entry-roles-list space-y-4 before:block before:h-4`}>
      {entries.map((entry, i) => {
        const { name: title, description, tasks } = entry;

        return (
          <div key={i} className="entry-role rounded bg-midnite/10 p-4">
            <div className="role-header list-entry-header mb-4">
              <h5 className="border-b border-lite/25">{title}</h5>
              <p>{description}</p>
            </div>
            <List contents={tasks} markerCss="text-lavender" />
          </div>
        );
      })}
    </div>
  );
}
