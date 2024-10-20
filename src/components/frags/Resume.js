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
import ResumeSection from "../layout/ResumeSection";
import useMediaQuery from "../hooks/useMediaQuery";
import Appendix from "../layout/Appendix";

export default function Resume({ close, standalone }) {
  const [siteMode] = useSiteMode();
  const { profile, projects, experience, education, skills } = resumeData;
  const { email, summary, address } = profile;
  const { city, state } = address;
  const $projects = projects.filter(
    ({ section, featured }) => featured && section.includes(siteMode),
  );
  const $MOBILE = useMediaQuery();

  // -------------------[ REFS ]-------------------
  const wrapperRef = useRef();
  const captionRef = useRef();
  const bodyRef = useRef();
  const sectionRefs = {
    Skills: useRef(),
    Projects: useRef(),
    Experience: useRef(),
    Education: useRef(),
  };

  // useEffect(() => console.log(bodyRef.current), []);

  const OUTPUT = (
    <div
      ref={wrapperRef}
      id="resume"
      className="hide-scroll m-1 flex snap-y snap-mandatory flex-col gap-x-8 gap-y-4 overflow-y-auto scroll-smooth rounded-lg bg-shade p-4 text-lg text-lite *:snap-start md:m-0 md:grid md:max-w-screen-xl md:snap-none md:px-12 md:py-8"
    >
      {/* =================================== *\
      ||  <><><><><><>\ CAPTION /<><><><><><> 
       \* =================================== */}
      <div
        ref={captionRef}
        id="resume-caption"
        className="relative isolate col-start-1 row-span-2 flex h-fit scroll-mt-4 flex-col items-center space-y-6 self-center rounded-lg bg-nite p-8 drop-shadow-sm md:w-[480px] md:p-12"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 flex flex-col items-center justify-end overflow-hidden rounded-[inherit] opacity-10 mix-blend-overlay">
          <MyLogo className="w-[110%] fill-white" />
        </div>
        <Logotype />
        <fieldset className="caption-summary border-t-[1.5px] border-lavender pt-2 text-center md:pt-4">
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
            <LocationIcon className="mr-2 h-4 overflow-visible fill-lavender" />
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
        <SocialMediaCache concise darkMode={false} />
      </div>

      <div className="resume-body-wrapper flex h-full shrink-0 flex-col gap-y-4 overflow-hidden md:contents">
        {/* ==================================== *\
      ||  <><><><><><><>\ NAV /<><><><><><><> 
       \* ==================================== */}
        <ResumeNav sections={sectionRefs} topRef={captionRef} close={close} />

        {/* ==================================== *\
      ||  <><><><><><><>\ BODY /<><><><><><><> 
       \* ==================================== */}

        <div
          ref={bodyRef}
          id="resume-body"
          className="hide-scroll space-y-8 overflow-y-scroll md:col-start-2"
        >
          {/* ========= SKILLS ========= */}
          <ResumeSection ref={(v) => (sectionRefs.Skills = v)} title="Skills">
            <SkillCache
              entries={skills.filter(({ category }) =>
                category.includes(siteMode),
              )}
              className="gap-2 text-4xl"
              concise
              showIcons
              featured
            />
            <Appendix
              contents={Object.entries({
                language: "Languages",
                tool: "Tools + Platforms",
                proficiency: "Proficiencies",
                "operating system": "Operating Systems",
              }).map(([_type, title]) => ({
                name: title,
                body: skills
                  .filter(
                    ({ category, type }) =>
                      category.includes(siteMode.toLowerCase()) &&
                      type === _type,
                  )
                  .map(({ name }) => name)
                  .join(", "),
              }))}
            />
          </ResumeSection>
          {/* ========= PROJECTS ========= */}
          <ResumeSection
            ref={(v) => (sectionRefs.Projects = v)}
            title="Projects"
          >
            <Appendix
              contents={$projects.map(({ name, description }) => ({
                name,
                body: description,
              }))}
            />
          </ResumeSection>
          {/* ========= EXPERIENCE ========= */}
          <ResumeSection
            ref={(v) => (sectionRefs.Experience = v)}
            title="Experience"
          >
            <Experience entries={experience} />
          </ResumeSection>
          {/* ========= EDUCATION ========= */}
          <ResumeSection
            ref={(v) => (sectionRefs.Education = v)}
            title="Education"
          >
            <Education />
          </ResumeSection>
          {/* ========= TO TOP ========= */}
          {!$MOBILE && <TopBtn destination={bodyRef} />}
        </div>
      </div>
    </div>
  );

  return OUTPUT;
}
