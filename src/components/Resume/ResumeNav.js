import { useState } from "react";
import { ReactComponent as CLOCK_ICON } from "../../assets/icons/clock-icon.svg";
import { ReactComponent as EDUCATION_ICON } from "../../assets/icons/education-icon.svg";
import { ReactComponent as TOOLS_ICON } from "../../assets/icons/tools-icon.svg";
import { ReactComponent as PUZZLE_ICON } from "../../assets/icons/puzzle-icon.svg";
import { ReactComponent as PROFILE_ICON } from "../../assets/icons/profile-icon.svg";
import useMediaQuery from "../hooks/useMediaQuery";

export default function ResumeNav({ sections, topRef, close }) {
  const [preview, setPreview] = useState("Sections");
  const $MOBILE = useMediaQuery();

  const icons = {
    Skills: TOOLS_ICON,
    Projects: PUZZLE_ICON,
    Education: EDUCATION_ICON,
    Experience: CLOCK_ICON,
  };

  let sectionElements = Object.entries(sections).map(([name, element]) => ({
    name,
    Icon: icons[name],
    handleClick: () => {
      element?.scrollIntoView({ behavior: "smooth" });
    },
    handleMouseEnter: () => setPreview(name),
  }));

  if ($MOBILE) {
    const caption = {
      name: "Caption",
      Icon: PROFILE_ICON,
      handleClick: () => {
        // Object.values(sections)[0].current?.scrollTo({
        //   behavior: "instant",
        //   top: 0,
        // });
        topRef.current?.scrollIntoView(true);
      },
    };
    const closer = {
      name: "Close",
      element: (
        <div className="island aspect-square self-stretch rounded-ellipse bg-day text-4xl leading-none text-shade">
          &times;
        </div>
      ),
      handleClick: close,
    };
    sectionElements = [caption, ...sectionElements, closer];
  }

  return (
    <div
      id="resume-top"
      className="resume-nav-wrapper z-[1000] order-last mx-auto w-fit self-center text-day md:order-none"
    >
      <div className="resume-nav-help hidden text-center font-key text-xs font-normal uppercase tracking-widest md:block">
        {preview}
      </div>
      <nav
        className="resume-nav flex items-center gap-x-1 rounded-full border-[3px] border-current p-1"
        onMouseLeave={() => setPreview("Sections")}
      >
        {sectionElements.map(
          ({ Icon, element, handleClick, handleMouseEnter }, i) => {
            return (
              <button
                key={i}
                onMouseEnter={() => handleMouseEnter?.()}
                onClick={() => handleClick()}
                className={`island group aspect-square h-12 duration-100 ease-out hover:border-current ${
                  !element
                    ? "rounded-ellipse border-[3px] border-transparent p-2"
                    : ""
                }`}
              >
                {Icon ? (
                  <Icon className="fill-current duration-100 ease-out group-hover:scale-110 group-hover:fill-day" />
                ) : (
                  element
                )}
              </button>
            );
          },
        )}
      </nav>
    </div>
  );
}
