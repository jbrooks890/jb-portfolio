import "../../styles/Contact.css";
import ConnectForm from "../frags/ConnectForm";
import useModal from "../hooks/useModal";
import Modal from "../shared/Modal";

export default function Contact() {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <section id="contact" className="site-section flex col">
        <div id="contact-content-wrapper" className="flex col">
          <h2>Let's Connect</h2>
          <button className="pill" onClick={() => toggle()}>
            Email me!
          </button>
        </div>
      </section>
      {isShowing && (
        <Modal isShowing={isShowing} hide={toggle}>
          <ConnectForm />
        </Modal>
      )}
    </>
  );
}
