// import "../../styles/Contact.css";
import ConnectForm from "../frags/ConnectForm";
import useModal from "../hooks/useModal";
import Section from "../layout/Section";
import Modal from "../shared/Modal";

export default function Contact() {
  const { isShowing, toggle } = useModal();

  return (
    <Section title="contact" className="site-section island test h-[75vh]">
      <div
        id="contact-content-wrapper"
        className="test flex flex-col items-center"
      >
        <h2>Let's Connect</h2>
        <button className="pill" onClick={() => toggle()}>
          Email me!
        </button>
      </div>
      {isShowing && (
        <Modal isShowing={isShowing} hide={toggle}>
          <ConnectForm />
        </Modal>
      )}
    </Section>
  );
}
