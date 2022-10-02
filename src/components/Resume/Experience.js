import Entry from "./Entry";

export default function Experience({ entries }) {
  const personal = entries.filter(entry => entry.type === "personal");
  const work = entries.filter(entry => entry.type === "professional");

  return (
    <div className="resume-experience">
      {entries.map((entry, i) => (
        <Entry key={i} type="experience" entry={entry} active={false} />
      ))}
    </div>
  );
}
