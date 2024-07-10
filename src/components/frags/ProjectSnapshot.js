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
    <div className="project-snap grid-cols-subgrid relative col-span-full grid rounded-lg">
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
      {/* {icon && (
        <ProjectIcon
          entry={entry}
          className="absolute -right-4 -top-4 border-4 border-white"
        />
      )} */}
      {/* -------------------[ CAPTION ]------------------- */}
      <div className="project-caption col-start-2 flex flex-col rounded-md bg-gradient-to-tl from-evening/5 via-transparent p-4">
        <h3 className="project-title inline-head leading-none text-shade shadow-red drop-shadow">
          {name}
        </h3>
        <div className="project-type text-xl font-semibold text-lavender">
          {type}
        </div>

        {/* {description && (
          <Markdown className="text-lg leading-normal">{description}</Markdown>
        )} */}
        <p className="text-lg leading-normal">{description}</p>
        <SkillCache
          entries={$tech}
          featured={false}
          filter={false}
          className="text-4xl"
          inline
          concise
          showIcons
        />
        {link && (
          <a
            className="project-visit-link group grid w-fit origin-left items-center gap-x-3 rounded-full bg-shade px-3 text-white duration-200 ease-out hover:bg-lavender hover:text-white"
            href={link}
            target="_blank"
          >
            Visit
            <ARROW
              className="stroke group-hover:animate-jab col-start-2 h-1/2 overflow-visible stroke-current stroke-[1.5] p-px opacity-50 duration-100 ease-out group-hover:opacity-100"
              vectorEffect="non-scaling-stroke"
            />
          </a>
        )}
      </div>
    </div>
  );
}
