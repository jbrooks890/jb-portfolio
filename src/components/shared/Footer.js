import "../../styles/Footer.css";
import SocialMediaCache from "../frags/SocialMediaCache";
import Icons from "./Icons";

export default function Footer() {
  return (
    <footer>
      <SocialMediaCache concise={false} darkMode={false} />
      &copy;{new Date().getFullYear()} Julian Brooks. All rights reserved.
      <Icons />
    </footer>
  );
}
