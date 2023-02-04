export default function StudyField({ entries, active, current, conferral }) {
  // console.log({ conferral });

  return (
    <div className={`entry-study-field`}>
      {entries.map((entry, i) => {
        const { name: title, degreeType } = entry;

        const abbr = new Map([
          ["Bachelor of Science", "BS"],
          ["Bachelor of Arts", "BA"],
          ["Bachelor of Fine Arts", "BFA"],
        ]);

        return (
          <div key={i}>
            <div className="field-header list-entry-header">
              <h4>{title}</h4>
              <i>{conferral ? degreeType : current ? "Studying" : "Studied"}</i>
            </div>
          </div>
        );
      })}
    </div>
  );
}
