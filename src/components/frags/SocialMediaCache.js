import { useState } from "react";
import { resumeData } from "../../utility/resume";
import "../../styles/SocialMediaCache.css";

export default function SocialMediaCache({ concise }) {
  const { socialMedia } = resumeData.profile;
  const [current, setCurrent] = useState(socialMedia[0]);

  return (
    <div className={`social-media-cache flex flex-col text-lavender`}>
      <div className="icon-cache flex">
        {socialMedia.map((entry, i) => {
          const { name, link, handle, icon } = entry;
          return (
            <a
              key={i}
              href={link}
              target="_blank"
              data-social-media-link={name}
              data-social-media-handle={handle}
              onMouseEnter={() => setCurrent(socialMedia[i])}
            >
              <svg className="social-media-icon fill-current hover:fill-day">
                <use href={`#${icon}`} />
              </svg>
            </a>
          );
        })}
      </div>
      {!concise && <h4 className="social-media-handle">{current.handle}</h4>}
    </div>
  );
}
