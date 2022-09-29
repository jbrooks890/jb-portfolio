import "../../styles/Footer.css";
import SocialMediaCache from "../frags/SocialMediaCache";
import Icons from "./Icons";

export default function Footer() {
  return (
    <footer>
      <SocialMediaCache concise={false} darkMode={false} />
      &copy;{new Date().getFullYear()} Julian Brooks. All rights reserved.
      <Icons />
      <svg height="0" width="0">
        <defs>
          <clipPath id="testSVG-clip">
            <path
              fill="#FFFFFF"
              stroke="#000000"
              stroke-width="1.5794"
              stroke-miterlimit="10"
              d="M215,100.3c97.8-32.6,90.5-71.9,336-77.6
        c92.4-2.1,98.1,81.6,121.8,116.4c101.7,149.9,53.5,155.9,14.7,178c-96.4,54.9,5.4,269-257,115.1c-57-33.5-203,46.3-263.7,20.1
        c-33.5-14.5-132.5-45.5-95-111.1C125.9,246.6,98.6,139.1,215,100.3z"
            />
          </clipPath>
        </defs>
      </svg>
    </footer>
  );
}
