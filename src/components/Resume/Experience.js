export default function Experience({ entries }) {
  const personal = entries.filter(entry => entry.type === "personal");
  const work = entries.filter(entry => entry.type === "professional");

  return (
    <div className="resume-experience">
      {work.map((entry, i) => {
        const { company, current, roles, startDate, endDate } = entry;
        return (
          <div key={i} className="experience-entry work">
            <div className="entry-header flex">
              <h2>{company.name}</h2>
              <h3>{`${startDate.month} ${startDate.year} - ${endDate.month} ${endDate.year}`}</h3>
            </div>
            <div className="entry-roles">
              {roles.map(entry => {
                const { name: title, description, tasks, skills } = entry;

                return (
                  <div key={i}>
                    <div className="role-header">
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
          </div>
        );
      })}
    </div>
  );
}
