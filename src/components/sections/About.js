import "../../assets/images/julian_profile_pic.jpg";
// import "../../styles/About.css";
import Quote from "../frags/Quote";
import SkillCache from "../frags/SkillCache";
import Modal from "../shared/Modal";
import useModal from "../hooks/useModal";
import Resume from "../frags/Resume";
import { portfolioData } from "../../utility/portfolio";
import { useSiteMode } from "../shared/ModeProvider";
import Blurb from "../frags/Blurb";
import Section from "../layout/Section";
import Block from "../layout/Block";
import Button from "../frags/Button";

export default function About({ pages }) {
  const { isShowing, toggle } = useModal();
  const [siteMode] = useSiteMode();

  return (
    <Section
      id="about"
      className="site-section center flex flex-col items-center"
    >
      <div className="content-wrap center flex flex-col space-y-20">
        <Blurb mode={siteMode} content={pages} />
        <Block className="about-body center flex flex-col" narrow>
          <SkillCache concise={false} showIcons featured />
          <Button
            className="resume-button text-2xl hover:text-lavender"
            handleClick={() => toggle()}
            // size="sm"
          >
            Résumé
          </Button>
        </Block>
        <Quote />
      </div>
      {isShowing && (
        <Modal isShowing={isShowing} hide={toggle}>
          <Resume />
        </Modal>
      )}
    </Section>
  );
}
