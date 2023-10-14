import Describe from "../frags/Describe";
import { education } from "../../lib/resume/education";
import Roles from "./Roles";
import { abbr } from "../../utility/utility";
import DateHeading from "../frags/DateHeading";
import StudyField from "./StudyField";

export default function Education() {
  return (
    <div className="resume-education space-y-4">
      {education.map(
        (
          {
            type,
            org: { name },
            current,
            startDate,
            endDate,
            roles,
            majors,
            minors,
            conferral,
            other,
            notes,
          },
          i,
        ) => {
          return (
            <Describe
              key={i}
              header={
                <DateHeading
                  name={name}
                  start={`${abbr(startDate.month)}/${String(
                    startDate.year,
                  ).slice(-2)}`}
                  end={
                    current
                      ? "Present"
                      : `${abbr(endDate.month)}/${String(endDate.year).slice(
                          -2,
                        )}`
                  }
                />
              }
            >
              {roles && <Roles entries={roles} />}
              <div className={`education-data`}>
                {majors?.length > 0 && (
                  <StudyField entries={majors} {...{ current, conferral }} />
                )}
                {minors?.length > 0 && (
                  <StudyField entries={minors} {...{ current, conferral }} />
                )}
                {other?.length > 0 && (
                  <StudyField entries={other} {...{ current, conferral }} />
                )}
                {notes?.length > 0 && (
                  <ul className="education-note-list">
                    {notes.map((note, i) => (
                      <li key={i}>{note}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Describe>
          );
        },
      )}
    </div>
  );
}
