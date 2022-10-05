import { useRef } from "react";

export default function Roles({ entries, active }) {
  const drawer = useRef();

  return (
    <div
      ref={drawer}
      className={`entry-roles-list ${active ? "open" : ""}`}
      style={active ? { maxHeight: drawer.current.scrollHeight + "px" } : null}
    >
      {entries.map((entry, i) => {
        const { name: title, description, tasks, skills } = entry;

        return (
          <div className="entry-role" key={i}>
            <div className="role-header list-entry-header">
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
            <ul className="role-task-list">
              {tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
