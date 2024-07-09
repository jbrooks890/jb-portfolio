import "../../styles/Footer.css";
import SocialMediaCache from "../frags/SocialMediaCache";
import TopBtn from "../frags/TopBtn";
import Icons from "./Icons";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center">
      <TopBtn />
      <SocialMediaCache concise={false} darkMode={false} />
      <div className="text-lg text-white">
        &copy;{new Date().getFullYear()} Julian Brooks. All rights reserved.
      </div>
      <Icons />
    </footer>
  );
}
