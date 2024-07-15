import { useState } from "react";
import { resumeData } from "../../utility/resume";

export default function SocialMediaCache({ concise, className }) {
  const { socialMedia } = resumeData.profile,
    [first] = socialMedia;
  const [current, setCurrent] = useState(first);

  return (
    <div
      className={`social-media-cache group mx-auto flex w-full max-w-screen-sm flex-col gap-y-2 self-stretch text-lavender ${
        className ?? ""
      }`.trim()}
    >
      <div className="icon-cache peer flex gap-x-5 self-center">
        {socialMedia.map((entry, i) => {
          const { name, link, handle, icon } = entry;
          return (
            <a
              key={i}
              href={link}
              className="aspect-square w-6 cursor-pointer"
              target="_blank"
              data-social-media-link={name}
              data-social-media-handle={handle}
              onMouseEnter={() => setCurrent(socialMedia[i])}
            >
              <svg className="social-media-icon h-full w-full fill-current drop-shadow-md duration-100 ease-out hover:scale-110 hover:fill-day">
                <use href={`#${icon}`} />
              </svg>
            </a>
          );
        })}
      </div>
      {!concise && (
        <span className="social-media-handle translate-y-1 text-center text-xl tracking-wider opacity-0 duration-200 ease-out before:text-lavender before:content-['@'] peer-hover:translate-y-0 peer-hover:opacity-100">
          {current.handle}
        </span>
      )}
    </div>
  );
}
