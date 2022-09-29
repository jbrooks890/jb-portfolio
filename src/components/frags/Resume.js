import { resumeData } from "../../utility/resume";
import { states } from "../../utility/utility";
import SocialMediaCache from "./SocialMediaCache";
import "../../styles/Resume.css";
import Experience from "../Resume/Experience";
import SkillCache from "./SkillCache";

export default function Resume() {
  const {
    firstName,
    lastName,
    address,
    email,
    summary,
    experience,
    education,
  } = resumeData;
  const { city, state } = address;

  return (
    <div id="resume" className="flex">
      {/* --------- CAPTION --------- */}
      <div id="resume-caption" className="flex col">
        <div className="name">
          <h2>{firstName}</h2>
          <h3 className="flex">
            {lastName.split("").map((letter, i) => (
              <span key={i}>{letter}</span>
            ))}
          </h3>
        </div>
        <fieldset className="caption-summary">
          <legend>Front-end Developer</legend>
          {summary}
        </fieldset>
        <div className="resume-email resume-connect">
          <div className="icon">
            <svg>
              <use href="#send-icon" />
            </svg>
          </div>
          {email.primary}
        </div>
        <div className="resume-location resume-connect">
          <div className="icon">
            <svg>
              <use href="#location-icon" />
            </svg>
          </div>
          {`${city}, ${states.get(state)}`}
        </div>
        <SkillCache concise={false} showIcons={true} featured={true} />
        <SocialMediaCache concise={true} darkMode={false} />
      </div>
      {/* --------- BODY --------- */}
      <div id="resume-body">
        <div id="resume-projects"></div>
        <div id="resume-experience">
          <Experience entries={experience} />
        </div>
        <div id="resume-education"></div>
      </div>
    </div>
  );
}
