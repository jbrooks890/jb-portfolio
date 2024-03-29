import "../../assets/images/julian_profile_pic.jpg";
import "../../styles/About.css";
import Quote from "../frags/Quote";
import SkillCache from "../frags/SkillCache";
import Modal from "../shared/Modal";
import useModal from "../hooks/useModal";
import Resume from "../frags/Resume";
import { portfolioData } from "../../utility/portfolio";
import { useSiteMode } from "../shared/ModeProvider";
import Blurb from "../frags/Blurb";

export default function About({ pages }) {
  const { isShowing, toggle } = useModal();
  const [siteMode] = useSiteMode();
  const titles = pages.map(page => page.title);
  const blurbs = pages.map(page => page.blurb);

  return (
    <section id="about" className="site-section flex col center">
      <div className="content-wrap flex col center">
        <Blurb mode={siteMode} content={pages} />
        <div className="about-body flex col center">
          <SkillCache concise={false} showIcons={true} featured={true} />
          <button className="resume-button" onClick={() => toggle()}>
            Résumé
          </button>
        </div>
        <Quote />
      </div>
      {isShowing && (
        <Modal isShowing={isShowing} hide={toggle}>
          <Resume />
        </Modal>
      )}
    </section>
  );
}
