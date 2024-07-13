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
import useMediaQuery from "../hooks/useMediaQuery";

export default function About({ pages }) {
  const { isShowing, toggle } = useModal();
  const [siteMode] = useSiteMode();
  const $MOBILE = useMediaQuery();

  return (
    <Section
      id="about"
      title="About"
      className="site-section flex flex-col bg-white md:items-center"
    >
      <div className="content-wrap flex flex-col space-y-20">
        <Blurb mode={siteMode} content={pages} />
        <Block className="about-body flex flex-col px-4 md:px-0" narrow>
          <SkillCache
            concise={false}
            className="mb-header gap-12 text-[5rem]"
            showIcons
            featured
          />

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
        <Modal isShowing={isShowing} hide={toggle} auto={$MOBILE}>
          <Resume close={() => isShowing && toggle()} />
        </Modal>
      )}
    </Section>
  );
}
