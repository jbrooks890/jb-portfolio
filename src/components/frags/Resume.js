// import "../../styles/Resume.css";
import { resumeData } from "../../utility/resume";
import { states } from "../../utility/utility";
import SocialMediaCache from "./SocialMediaCache";
import Experience from "../Resume/Experience";
import SkillCache from "./SkillCache";
import Skills from "../Resume/Skills";
import Entry from "../Resume/Entry";
import ResumeNav from "../Resume/ResumeNav";
import { Fragment, useEffect, useRef } from "react";
import { useSiteMode } from "../shared/ModeProvider";
import Logotype from "./Logotype";
import pdf from "../../assets/files/Resume - juliancbrooks-com.pdf";
import TopBtn from "./TopBtn";
import { ReactComponent as LocationIcon } from "../../assets/icons/location-icon.svg";
import { ReactComponent as SendIcon } from "../../assets/icons/send-icon.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-stroke-icon.svg";
import { ReactComponent as MyLogo } from "../../assets/icons/jb-logo.svg";
import Education from "../Resume/Education";

export default function Resume() {
  const [siteMode] = useSiteMode();
  const { profile, projects, experience, education, skills } = resumeData;
  const { email, summary, address } = profile;
  const { city, state } = address;
  const $projects = projects.filter((project) =>
    project.section.includes(siteMode),
  );
  // -------------------[ REFS ]-------------------
  const bodyRef = useRef(null);
  const sectionRefs = {
    Skills: useRef(),
    Projects: useRef(),
    Education: useRef(),
    Experience: useRef(),
  };

  // useEffect(() => console.log(bodyRef.current), []);

  return (
    <div
      id="resume"
      className="grid h-full max-w-screen-xl gap-8 scroll-smooth rounded-lg bg-shade px-12 py-8 text-xl text-lite"
    >
      {/* =================================== *\
      ||  <><><><><><>\ CAPTION /<><><><><><> 
       \* =================================== */}
      <div
        id="resume-caption"
        className="relative isolate col-start-1 row-span-2 flex h-fit w-[480px] flex-col items-center space-y-6 self-center rounded-lg bg-nite p-12 drop-shadow-sm"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 flex flex-col items-center justify-end overflow-hidden rounded-[inherit] opacity-10 mix-blend-overlay">
          <MyLogo className="w-[110%] fill-white" />
        </div>
        <Logotype />
        <fieldset className="caption-summary rounded-md border-[1.5px] border-lavender p-4">
          <legend className="label-text text-center font-bold leading-none text-lavender">
            Front-end Developer
          </legend>
          {summary}
        </fieldset>
        <div className="flex flex-col items-center">
          <div className="resume-email resume-connect flex items-center">
            <SendIcon className="mr-2 h-4 fill-lavender" />
            {email.primary}
          </div>
          <div className="resume-location resume-connect flex items-center">
            <LocationIcon className="mr-2 h-4 fill-lavender" />
            {`${city}, ${states.get(state)}`}
          </div>
        </div>
        <a
          className="resume-download my-4 flex items-center rounded-full border-2 border-current px-5 py-1 text-lg text-lavender duration-200 ease-out hover:border-lavender hover:bg-lavender hover:text-midnite"
          href={pdf}
          target="_blank"
        >
          <div className="relative bottom-px mr-2 flex items-center border-b-2 border-current pb-px">
            <ArrowIcon className="aspect-square h-3 rotate-90 stroke-current stroke-[1.5]" />
          </div>
          <b>PDF</b>
        </a>
        <SocialMediaCache concise={true} darkMode={false} />
      </div>

      {/* ==================================== *\
      ||  <><><><><><><>\ NAV /<><><><><><><> 
       \* ==================================== */}
      <ResumeNav sections={sectionRefs} />

      {/* ==================================== *\
      ||  <><><><><><><>\ BODY /<><><><><><><> 
       \* ==================================== */}

      <div
        ref={bodyRef}
        id="resume-body"
        className="col-start-2 space-y-8 overflow-y-scroll"
      >
        {/* ========= SKILLS ========= */}
        <section
          ref={(v) => (sectionRefs.Skills = v)}
          id="resume-skills"
          className="resume-section"
          data-resume-section="Skills"
        >
          <h3>Skills</h3>
          <SkillCache
            entries={skills.filter(({ category }) =>
              category.includes(siteMode),
            )}
            concise={true}
            showIcons={true}
            featured={true}
          />
          <Skills
            skills={skills.filter((skill) =>
              skill.category.includes(siteMode.toLowerCase()),
            )}
          />
        </section>
        {/* ========= PROJECTS ========= */}
        <section
          ref={(v) => (sectionRefs.Projects = v)}
          id="resume-projects"
          className="resume-section"
          data-resume-section="Projects"
        >
          <h3>Projects</h3>
          <div className="project-wrapper grid grid-cols-[minmax(0,1fr)_minmax(0,3fr)] gap-4 rounded-md bg-black/10 p-4">
            {$projects.map((project, i) => {
              const { name, description, link, technologies } = project;
              return (
                <div key={i} className="contents">
                  <a href={link} target="_blank" className="hover:text-day">
                    <h4 className="text-right">{name}</h4>
                  </a>
                  <div>{description}</div>
                </div>
              );
            })}
          </div>
        </section>
        {/* ========= EXPERIENCE ========= */}
        <section
          ref={(v) => (sectionRefs.Experience = v)}
          id="resume-experience"
          className="resume-section"
          data-resume-section="Experience"
        >
          <h3>Experience</h3>
          <Experience entries={experience} />
        </section>
        {/* ========= EDUCATION ========= */}
        <section
          ref={(v) => (sectionRefs.Education = v)}
          id="resume-education"
          className="resume-section"
          data-resume-section="Education"
        >
          <h3>Education</h3>
          <Education />
        </section>
        {/* ========= TO TOP ========= */}
        {bodyRef?.current && <TopBtn destination={bodyRef.current} />}
      </div>
    </div>
  );
}
