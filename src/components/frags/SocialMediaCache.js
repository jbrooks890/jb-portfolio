import { useState } from "react";
import { resumeData } from "../../utility/resume";
import "../../styles/SocialMediaCache.css";

export default function SocialMediaCache({ concise, darkMode }) {
  const { socialMedia } = resumeData.profile;
  const [current, setCurrent] = useState(socialMedia[0]);

  return (
    <div className="social-media-cache flex col">
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
              <svg className="social-media-icon">
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
