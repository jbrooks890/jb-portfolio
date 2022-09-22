import "../../styles/Footer.css";
import Icons from "./Icons";

export default function Footer() {
  return (
    <footer>
      &copy;{new Date().getFullYear()} Julian Brooks. All rights reserved.
      <Icons />
    </footer>
  );
}
