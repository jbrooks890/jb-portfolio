import "../../styles/Footer.css";
import SocialMediaCache from "../frags/SocialMediaCache";
import TopBtn from "../frags/TopBtn";
import Icons from "./Icons";

export default function Footer() {
  return (
    <footer>
      <TopBtn destination="#top" />
      <SocialMediaCache concise={false} darkMode={false} />
      &copy;{new Date().getFullYear()} Julian Brooks. All rights reserved.
      <Icons />
    </footer>
  );
}
