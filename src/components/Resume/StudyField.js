export default function StudyField({ entries, active }) {
  return (
    <div className={`entry-study-field`}>
      {entries.map((entry, i) => {
        const {
          name: title,
          degreeLevel,
          degreeType,
          conferralType,
          field,
          tags,
        } = entry;

        const abbr = new Map([
          ["Bachelor of Science", "BS"],
          ["Bachelor of Arts", "BA"],
          ["Bachelor of Fine Arts", "BFA"],
        ]);

        return (
          <div key={i}>
            <div className="field-header list-entry-header">
              <h4>{title}</h4>
              <i>{degreeType}</i>
            </div>
          </div>
        );
      })}
    </div>
  );
}
