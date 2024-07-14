import { useRef, useState } from "react";
// import "../../styles/ConnectForm.css";
import SelectBox from "./SelectBox";
import emailjs from "emailjs-com";
import Button from "./Button";
import { capitalize } from "../../lib/utility/helperFns";
import SocialMediaCache from "./SocialMediaCache";

const { REACT_APP_EMAILJS_PUBLIC_KEY } = process.env;

const occupations = [
  "just looking around",
  "a recruiter",
  "a potential client",
  "an employer",
  "a hiring manager",
];
const interests = [
  "Nothing really...",
  "Everything",
  "Projects",
  "Artwork",
  "Other",
];

export default function ConnectForm() {
  const fields = [
    {
      field: "name",
      label: "Name",
      type: "input",
      placeholder: "Jane Doe",
      required: true,
    },
    {
      field: "email",
      label: "Email",
      type: "email",
      placeholder: "janedoe@domain.com",
      required: true,
    },
    {
      field: "occupation",
      label: "I am...",
      type: "select",
      options: occupations,
      value: occupations[0],
    },
    {
      field: "interest",
      label: "What interested you?",
      type: "select",
      multi: true,
      options: interests,
      value: interests[0],
    },
    {
      field: "message",
      label: "Message",
      type: "block",
      placeholder: "Hey Julian! Are you available for work?",
    },
  ];
  const [formContent, updateFormContent] = useState(
    Object.fromEntries(fields.map(({ field, value }) => [field, value])),
  );
  const [completed, setCompleted] = useState(false);

  const msgInput = useRef();
  const msgMax = 300;

  // console.log(REACT_APP_EMAILJS_PUBLIC_KEY);

  const handleInput = (field, value) => {
    updateFormContent((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const markComplete = (e) => {
    e.target.reset();
    updateFormContent({
      name: "",
      email: "",
      occupation: "",
      message: "",
    });
    setCompleted(true);
  };

  const sendEmail = async (e) => {
    try {
      const res = await emailjs.sendForm(
        "service_paliycp",
        "connect_form",
        e.target,
        REACT_APP_EMAILJS_PUBLIC_KEY,
      );
      console.log(res);
      markComplete(e);
    } catch (err) {
      console.warn(
        "Could not send email. Received the following error:\n",
        err.message,
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e);
  };

  const fieldElements = fields.map(
    ({ field, label, type, placeholder, required, options, multi }, i) => {
      const display = label ?? capitalize(field);
      let Element;
      switch (type) {
        case "block":
          Element = (
            <textarea
              placeholder={placeholder}
              rows={5}
              value={formContent[field]}
              className="w-full rounded border-2 border-lavender p-2 placeholder:text-lavender"
              onChange={(e) => handleInput(field, e.target.value)}
            />
          );
          break;
        case "select":
          Element = (
            <SelectBox
              field={field}
              options={options}
              multi={multi}
              displayCss="border-2 border-lavender p-2 rounded"
              value={formContent[field]}
              handleChange={(v) => {
                handleInput(field, v);
              }}
            />
          );
          break;
        default:
          Element = (
            <input
              type={type}
              placeholder={placeholder}
              required={required}
              value={formContent[field]}
              className="w-full rounded border-2 border-solid border-lavender p-2 placeholder:text-lavender"
              onChange={(e) => handleInput(field, e.target.value)}
            />
          );
      }
      return (
        <label key={i} htmlFor={field} className="text-day">
          <span
            className={`text-base uppercase tracking-wider text-lavender ${
              required ? "after:text-lite after:content-['*']" : ""
            }`}
          >
            {display}
          </span>
          {Element}
        </label>
      );
    },
  );

  return (
    <form
      id="connect-form"
      className="flex w-screen flex-col gap-y-3 overflow-hidden rounded-lg border-2 border-lite/10 bg-nite p-4 py-header duration-200 ease-out md:w-[90vmin] md:max-w-lg md:p-8"
      onSubmit={handleSubmit}
    >
      <h2 className="m-0 text-lite">{completed ? "Sent!" : "Contact"}</h2>
      {completed ? (
        <>
          <p className="text-center text-xl text-day">
            Thanks for reaching out! I look forward to chatting with you. You
            can also reach me on social media or directly via{" "}
            <a
              className="text-lite underline underline-offset-4 duration-100 ease-out md:hover:text-lavender"
              href="mailto:jbrooks890@gmail.com"
              target="_blank"
            >
              email
            </a>{" "}
            if you prefer.
          </p>
          <SocialMediaCache className="self-center" concise />
        </>
      ) : (
        <>
          <div
            id="connect-form-content"
            className="flex grow flex-col gap-3 overflow-y-auto"
          >
            {fieldElements}
          </div>
          <Button
            type="submit"
            className="text-2xl uppercase tracking-wider text-day duration-200 ease-out hover:text-lite"
          >
            Send
          </Button>
        </>
      )}
    </form>
  );
}
