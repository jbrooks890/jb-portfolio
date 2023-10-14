import Describe from "../frags/Describe";
import { experience } from "../../lib/resume/experience";
import Roles from "./Roles";
import { abbr } from "../../utility/utility";
import DateHeading from "../frags/DateHeading";

export default function Experience({ entries }) {
  const personal = entries.filter((entry) => entry.type === "personal");
  const work = entries.filter((entry) => entry.type === "professional");

  return (
    <div className="resume-experience">
      {experience.map(
        ({ type, org: { name }, current, startDate, endDate, roles }, i) => {
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
            </Describe>
          );
        },
      )}
    </div>
  );
}
