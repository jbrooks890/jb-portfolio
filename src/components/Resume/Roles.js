export default function Roles({ entries, active }) {
  return (
    <div className={`entry-roles-list ${active ? "open" : ""}`}>
      {entries.map((entry, i) => {
        const { name: title, description, tasks, skills } = entry;

        return (
          <div className='entry-role' key={i}>
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
