// import "../../styles/Contact.css";
import ConnectForm from "../frags/ConnectForm";
import useModal from "../hooks/useModal";
import Section from "../layout/Section";
import Modal from "../shared/Modal";
import ConnectImg from "../../assets/images/Collaborate-2.jpg";
import Button from "../frags/Button";

// console.log({ ConnectImg });

export default function Contact() {
  const { isShowing, toggle } = useModal();

  return (
    <Section
      title="contact"
      className={`site-section island h-[75vh] bg-fixed before:absolute before:inset-0 before:bg-lite before:mix-blend-multiply before:content-['']`}
      bgImg={ConnectImg}
    >
      <div
        id="contact-content-wrapper"
        className="flex flex-col items-center rounded-xl bg-midnite/10 px-12 py-16 backdrop-blur-sm"
      >
        <h2 className="mb-4 text-6xl text-lite">Let's Connect</h2>
        <Button
          handleClick={toggle}
          size="sm"
          className="text-3xl uppercase text-lite"
        >
          Contact
        </Button>
      </div>
      {isShowing && (
        <Modal isShowing={isShowing} hide={toggle}>
          <ConnectForm />
        </Modal>
      )}
    </Section>
  );
}
