import "../../assets/images/julian_profile_pic.jpg";
import "../../styles/About.css";

export default function About({ pages }) {
  return (
    <section id="about" className="site-section flex">
      <div className="headshot-wrap">
        <img
          src={require("../../assets/images/julian_profile_pic.jpg")}
          alt="Headshot of Julian"
          className="headshot"
        />
      </div>
      <div className="description">
        <h2>A Developer</h2>
        <p>
          I'm Julian! I am a <em>developer</em> based out of <i>Atlanta, GA</i>.
          I enjoy the duality of technical and artistic design and how they can
          be used together to solve problems.
        </p>
      </div>
      <ul className="about-shift">
        {pages.map((page, i) => (
          <li key={i}></li>
        ))}
      </ul>
      <q data-author="Leonardo da Vinci">
        Art is never finished, only abandoned
      </q>
    </section>
  );
}
