import "../../assets/images/julian_profile_pic.jpg";
import "../../styles/About.css";
import Quote from "../frags/Quote";
import SkillCache from "../frags/SkillCache";
import Modal from "../shared/Modal";
import useModal from "../hooks/useModal";
import Resume from "../frags/Resume";

export default function About({ pages }) {
  const { isShowing, toggle } = useModal();

  return (
    <section id="about" className="site-section flex col">
      <div className="content-wrap grid">
        <div className="description flex col">
          <h2>A Developer</h2>
          <p>
            I'm Julian! I am a <em>software developer</em> based out of{" "}
            <i>Atlanta, GA</i>. I enjoy the duality of technical and artistic
            design and how they can be used together to solve problems.
          </p>
          <ul className="about-shift">
            <h3>I'm also</h3>
            {pages.map((page, i) => (
              <li key={i}></li>
            ))}
          </ul>
        </div>
        <div className="headshot-wrap flex">
          <img
            src={require("../../assets/images/julian_profile_pic.jpg")}
            alt="Headshot of Julian"
            className="headshot"
          />
        </div>
        <div className="about-body flex col">
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
