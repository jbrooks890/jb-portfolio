import { useRef } from "react";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-stroke-icon.svg";

export default function Roles({ entries }) {
  return (
    <div className={`entry-roles-list`}>
      {entries.map((entry, i) => {
        const { name: title, description, tasks } = entry;

        return (
          <div key={i} className="entry-role">
            <div className="role-header list-entry-header">
              <h5>{title}</h5>
              <p>{description}</p>
            </div>
            <div className="role-task-list grid gap-2">
              {tasks.map((task, i) => (
                <div key={i} className="contents">
                  <ArrowIcon className="h-4 stroke-lavender stroke-2" />
                  <div key={i} className="col-start-2">
                    {task}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
