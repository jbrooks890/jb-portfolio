import { Fragment } from "react";

export default function StudyField({ entries, active, current, conferral }) {
  // console.log({ conferral });

  return (
    <div
      className={`entry-study-field flex justify-between gap-4 border-b border-lite/25`}
    >
      {entries.map((entry, i) => {
        const { name: title, degreeType } = entry;

        return (
          <Fragment key={i}>
            <h5>{title}</h5>
            <i>{conferral ? degreeType : current ? "Studying" : "Studied"}</i>
          </Fragment>
        );
      })}
    </div>
  );
}
