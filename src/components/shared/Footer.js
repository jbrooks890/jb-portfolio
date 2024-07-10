// import "../../styles/Footer.css";
import SocialMediaCache from "../frags/SocialMediaCache";
import TopBtn from "../frags/TopBtn";
import Icons from "./Icons";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center px-12 py-4 font-normal">
      <TopBtn className="mb-4" />
      <SocialMediaCache concise={false} darkMode={false} />
      <div className="text-lg text-white text-opacity-75">
        &copy;{new Date().getFullYear()} Julian Brooks. All rights reserved.
      </div>
      <Icons />
    </footer>
  );
}
