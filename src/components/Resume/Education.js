import Describe from "../frags/Describe";
import { education } from "../../lib/resume/education";
import Roles from "./Roles";
import { abbr } from "../../utility/utility";
import DateHeading from "../frags/DateHeading";
import StudyField from "./StudyField";
import List from "../layout/List";

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
              {/* {roles && <Roles entries={roles} />} */}
              <div className="education-data rounded bg-midnite/10 p-4 first:mt-4">
                {[majors, minors, other]
                  .filter((section) => !!section?.length)
                  .map((section, i) => (
                    <StudyField
                      key={i}
                      entries={section}
                      {...{ current, conferral }}
                    />
                  ))}
                {notes?.length > 0 && (
                  <List contents={notes} markerCss="text-lavender" />
                )}
              </div>
            </Describe>
          );
        },
      )}
    </div>
  );
}
