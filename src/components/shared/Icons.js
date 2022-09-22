import { ReactComponent as JB_LOGO_SYM } from "../../assets/icons/jb-logo-symbol.svg";
import { ReactComponent as IG_LOGO } from "../../assets/icons/ig-logo.svg";
import { ReactComponent as LINKEDIN_LOGO } from "../../assets/icons/linked-in-logo.svg";
import { ReactComponent as XWORD_LOGO } from "../../assets/icons/xword-logo-symbol.svg";
import { ReactComponent as GITHUB_LOGO } from "../../assets/icons/github-logo.svg";
import { ReactComponent as RESTART_ICON } from "../../assets/icons/clear-restart.svg";
import { ReactComponent as LIKE_ICON } from "../../assets/icons/heart-icon.svg";
import { ReactComponent as DIALOG_ICON } from "../../assets/icons/dialog-icon.svg";
import { ReactComponent as EDIT_ICON } from "../../assets/icons/edit-icon.svg";

export default function Icons() {
  return (
    <svg id="icon-cache" style={{ display: "none" }}>
      <JB_LOGO_SYM />
      <IG_LOGO />
      <LINKEDIN_LOGO />
      <XWORD_LOGO />
      <GITHUB_LOGO />
      <RESTART_ICON />
      <LIKE_ICON />
      <DIALOG_ICON />
      <EDIT_ICON />
    </svg>
  );
}
