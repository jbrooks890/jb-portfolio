// import "../../styles/ProjectSnapshot.css";
import ProjectIcon from "./ProjectIcon";
import ProjectImageCar from "./ProjectImageCar";
import SkillCache from "./SkillCache";
import { wrapSkills } from "../../utility/resume";
import ImageCar from "../layout/ImageCar";
import { Link } from "react-router-dom";
import Describe from "./Describe";

export default function ProjectSnapshot({ entry }) {
  const { name, type, description, tech, link, icon, images } = entry;
  const $tech = wrapSkills(tech);

  return (
    <div className="project-snap relative mb-12">
      <div className="project-gallery flex flex-col items-center">
        {/* <ProjectImageCar images={images} /> */}
        <ImageCar
          className="h-full rounded-md"
          content={images.map(({ src }) => ({
            src: require(`/src/assets/images/${src}`),
            name,
            about: description,
          }))}
        />
      </div>
      {icon && (
        <ProjectIcon
          entry={entry}
          className="absolute -right-4 -top-4 border-4"
        />
      )}
      {/* -------------------[ CAPTION ]------------------- */}
      <div className="project-caption absolute inset-0 top-auto flex flex-col justify-end">
        <Describe
          className="m-0"
          header={
            <h3 className="project-title m-0 p-4 text-right text-6xl text-shade drop-shadow">
              {name}
            </h3>
          }
        >
          <div className="project-type text-xl font-semibold">{type}</div>
          <SkillCache
            entries={$tech}
            concise={true}
            showIcons={true}
            featured={false}
            filter={false}
          />
          <p className="text-xl text-day">{description}</p>
          {link && (
            <a className="project-visit-link" href={link} target="_blank">
              Visit
            </a>
          )}
        </Describe>
        {/* <h3 className="project-title text-lite">{name}</h3>
        <div className="project-type text-xl font-semibold">{type}</div>
        <SkillCache
          entries={$tech}
          concise={true}
          showIcons={true}
          featured={false}
          filter={false}
        />
        <p className="text-xl text-day">{description}</p>
        {link && (
          <a className="project-visit-link" href={link} target="_blank">
            Visit
          </a>
        )} */}
        {/* {link && <Link href />} */}
      </div>
    </div>
  );

  return (
    <div className="project-snap relative mb-12 grid grid-cols-2 gap-x-8 bg-nite bg-gradient-to-tl from-nite to-shade">
      <div className="project-gallery flex flex-col items-center">
        {/* <ProjectImageCar images={images} /> */}
        <ImageCar
          className="h-full"
          content={images.map(({ src }) => ({
            src: require(`/src/assets/images/${src}`),
            name,
            about: description,
          }))}
        />
      </div>
      <div className="project-caption p-8 pl-0">
        {icon && <ProjectIcon entry={entry} />}
        <h3 className="project-title text-lite">{name}</h3>
        <div className="project-type text-xl font-semibold">{type}</div>
        <SkillCache
          entries={$tech}
          concise={true}
          showIcons={true}
          featured={false}
          filter={false}
        />
        <p className="text-xl text-day">{description}</p>
        {link && (
          <a className="project-visit-link" href={link} target="_blank">
            Visit
          </a>
        )}
        {/* {link && <Link href />} */}
      </div>
    </div>
  );
}
