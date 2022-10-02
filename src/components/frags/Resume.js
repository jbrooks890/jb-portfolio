import { resumeData } from "../../utility/resume";
import { states } from "../../utility/utility";
import SocialMediaCache from "./SocialMediaCache";
import "../../styles/Resume.css";
import Experience from "../Resume/Experience";
import SkillCache from "./SkillCache";
import Skills from "../Resume/Skills";
import Entry from "../Resume/Entry";
import ResumeNav from "../Resume/ResumeNav";

export default function Resume() {
  const {
    firstName,
    lastName,
    address,
    email,
    summary,
    projects,
    experience,
    education,
    skills,
  } = resumeData;
  const { city, state } = address;

  return (
    <div id="resume" className="flex">
      {/* <><><><><><><>\ CAPTION /<><><><><><><> */}
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
        {/* <SkillCache concise={true} showIcons={true} featured={true} /> */}
        <SocialMediaCache concise={true} darkMode={false} />
      </div>

      {/* ==================================== //
      ||- <><><><><><><>\ BODY /<><><><><><><> 
      //- ==================================== */}

      <div id="resume-body" className="flex col">
        {/* ========= NAV ========= */}
        <ResumeNav
          sections={["Skills", "Projects", "Education", "Experience"]}
        />
        {/* <nav id="resume-top" className="resume-nav">
          <fieldset className="flex">
            <legend>Sections</legend>

            <a href="#resume-skills">Skills</a>
            <a href="#resume-projects">Projects</a>
            <a href="#resume-education">Education</a>
            <a href="#resume-experience">Experience</a>
          </fieldset>
        </nav> */}
        {/* ========= SKILLS ========= */}
        <section
          id="resume-skills"
          className="resume-section"
          data-resume-section="Skills"
        >
          <SkillCache
            entries={skills}
            concise={true}
            showIcons={true}
            featured={true}
          />
          <Skills
            skills={skills.filter(skill =>
              skill.category.includes("developer")
            )}
          />
        </section>
        {/* ========= PROJECTS ========= */}
        <section
          id="resume-projects"
          className="resume-section"
          data-resume-section="Projects"
        >
          <div className="project-wrapper">
            {projects.map((project, i) => {
              const { name, description, link, technologies } = project;
              return (
                <>
                  <a href={link} target="_blank">
                    <h3>{name}</h3>
                  </a>
                  <p>{description}</p>
                </>
              );
            })}
          </div>
        </section>
        {/* ========= EDUCATION ========= */}
        <section
          id="resume-education"
          className="resume-section"
          data-resume-section="Education"
        >
          {education.map((entry, i) => (
            <Entry key={i} type={"education"} entry={entry} active={false} />
          ))}
        </section>
        {/* ========= EXPERIENCE ========= */}
        <section
          id="resume-experience"
          className="resume-section"
          data-resume-section="Experience"
        >
          <Experience entries={experience} />
        </section>
        <div className="nav-to-top flex col">
          <a href="#resume-top" className="arrow-wrapper">
            <svg>
              <use href="#arrow-icon" />
            </svg>
          </a>
          <span>Top</span>
        </div>
      </div>
    </div>
  );
}
