// import "../../styles/ProjectSnapshot.css";
import ProjectIcon from "./ProjectIcon";
import ProjectImageCar from "./ProjectImageCar";
import SkillCache from "./SkillCache";
import { wrapSkills } from "../../utility/resume";
import ImageCar from "../layout/ImageCar";
import { Link } from "react-router-dom";
import Describe from "./Describe";
import Markdown from "markdown-to-jsx";
import { ReactComponent as ARROW } from "../../assets/icons/arrow-stroke-icon.svg";

export default function ProjectSnapshot({ entry }) {
  const { name, type, description, tech, link, icon, images } = entry;
  const $tech = wrapSkills(tech);

  return (
    <div className="project-snap relative col-span-full grid gap-4 rounded-lg p-4 md:grid-cols-subgrid md:gap-[unset] md:p-0">
      {/* -------------------[ GALLERY ]------------------- */}
      <div className="project-gallery flex flex-col items-center">
        {/* <ProjectImageCar images={images} /> */}
        <ImageCar
          className="h-full rounded-md drop-shadow"
          content={images.map(({ src }) => ({
            src: require(`/src/assets/images/${src}`),
            name,
            about: description,
          }))}
        />
      </div>
      {/* -------------------[ CAPTION ]------------------- */}
      <div className="project-caption flex flex-col rounded-md bg-gradient-to-t from-evening/5 via-transparent pb-4 text-center md:col-start-2 md:bg-gradient-to-tl md:p-4 md:text-left">
        <h3 className="project-title inline-head whitespace-pre leading-none text-shade shadow-red drop-shadow">
          <Markdown>{name}</Markdown>
        </h3>
        <div className="project-type text-xl font-semibold text-lavender">
          {type}
        </div>

        {description && (
          <Markdown className="text-lg leading-normal">{description}</Markdown>
        )}
        <SkillCache
          entries={$tech}
          featured={false}
          filter={false}
          className="gap-2 text-5xl"
          inline
          concise
          showIcons
        />
        {link && (
          <a
            className="project-visit-link group mx-4 grid origin-left items-center justify-center gap-x-3 rounded-lg bg-shade p-2 px-4 text-xl uppercase tracking-wider text-white duration-200 ease-out hover:bg-lavender hover:text-white md:m-0 md:mt-auto md:w-fit md:items-center md:rounded-md md:border-2 md:border-current md:bg-transparent md:px-2 md:py-0 md:text-lg md:text-current md:hover:border-lavender"
            href={link}
            target="_blank"
          >
            Visit
            <ARROW
              className="stroke col-start-2 h-4 overflow-visible stroke-current stroke-[1.5] p-px opacity-50 duration-100 ease-out group-hover:animate-jab group-hover:opacity-100"
              vectorEffect="non-scaling-stroke"
            />
          </a>
        )}
      </div>
    </div>
  );
}
