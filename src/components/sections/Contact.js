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
      className={`site-section island h-[75vh] bg-center before:absolute before:inset-0 before:bg-lite before:mix-blend-multiply md:bg-fixed`}
      bgImg={ConnectImg}
    >
      <div
        id="contact-content-wrapper"
        className="exempt m-4 flex w-fit max-w-screen-sm flex-col items-center rounded-xl bg-midnite/10 p-8 backdrop-blur-sm md:px-12 md:py-16"
      >
        <h2 className="mb-4 text-lite md:text-6xl">Let's Connect</h2>
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
