import { resumeData } from "../../utility/resume";
import { states } from "../../utility/utility";
import SocialMediaCache from "./SocialMediaCache";
import "../../styles/Resume.css";
import Experience from "../Resume/Experience";
import SkillCache from "./SkillCache";
import Skills from "../Resume/Skills";
import Entry from "../Resume/Entry";
import ResumeNav from "../Resume/ResumeNav";
import { Fragment } from "react";
import { useSiteMode } from "../shared/ModeProvider";
import Logotype from "./Logotype";
import pdf from "../../assets/files/Resume - juliancbrooks-com.pdf";
import TopBtn from "./TopBtn";

export default function Resume() {
  const [siteMode] = useSiteMode();
  const { profile, projects, experience, education, skills } = resumeData;
  const { email, summary, address } = profile;
  const { city, state } = address;
  const $projects = projects.filter(project =>
    project.section.includes(siteMode)
  );

  return (
    <div id="resume" className="flex middle">
      {/* =================================== *\
      ||  <><><><><><>\ CAPTION /<><><><><><> 
       \* =================================== */}
      <div id="resume-caption" className="flex col middle">
        <Logotype />
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
        <a className="resume-download flex middle" href={pdf} target="_blank">
          <svg>
            <use href="#arrow-icon" />
          </svg>
          <span>PDF</span>
        </a>
        <SocialMediaCache concise={true} darkMode={false} />
      </div>

      {/* ==================================== *\
      ||  <><><><><><><>\ BODY /<><><><><><><> 
       \* ==================================== */}

      <div id="resume-body" className="flex col">
        {/* ========= NAV ========= */}
        <ResumeNav
          sections={["Skills", "Projects", "Education", "Experience"]}
        />
        {/* ========= SKILLS ========= */}
        <section
          id="resume-skills"
          className="resume-section"
          data-resume-section="Skills"
        >
          <SkillCache
            entries={skills.filter(skill => skill.category.includes(siteMode))}
            concise={true}
            showIcons={true}
            featured={true}
          />
          <Skills
            skills={skills.filter(skill =>
              skill.category.includes(siteMode.toLowerCase())
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
            {$projects.map((project, i) => {
              const { name, description, link, technologies } = project;
              return (
                <Fragment key={i}>
                  <a href={link} target="_blank">
                    <h3>{name}</h3>
                  </a>
                  <p>{description}</p>
                </Fragment>
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
        {/* ========= TO TOP ========= */}
        <TopBtn destination={"#resume-top"} />
      </div>
    </div>
  );
}
