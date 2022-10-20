import { useRef, useState } from "react";
import "../../styles/ConnectForm.css";
import SelectBox from "./SelectBox";
import emailjs from "emailjs-com";

const { REACT_APP_EMAILJS_PUBLIC_KEY } = process.env;

export default function ConnectForm() {
  const [formContent, updateFormContent] = useState({
    name: "",
    email: "",
    occupation: "",
    message: "",
  });
  const [askMore, setAskMore] = useState(false);
  const [completed, setCompleted] = useState(false);
  const occupations = [
    "just looking around",
    "a recruiter",
    "a potential client",
    "an employer",
    "a hiring manager",
  ];
  const interests = ["Projects", "Artwork", "Book(s)", "Other"];
  const msgInput = useRef();
  const msgMax = 300;

  // console.log(REACT_APP_EMAILJS_PUBLIC_KEY);

  const handleInput = e => {
    const { name, value } = e.target;
    updateFormContent(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendEmail(e);
  };

  const sendEmail = e => {
    emailjs
      .sendForm(
        "service_paliycp",
        "connect_form",
        e.target,
        REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        res => {
          console.log(res.text);
          markComplete(e)
        },
        err => console.log(err.text)
      );
  };

  const markComplete = (e) => {
    e.target.reset();
    updateFormContent({
      name: "",
      email: "",
      occupation: "",
      message: "",
    })
    setCompleted(true);
  }

  return (
    <form
      id="connect-form"
      className="flex col"
      onSubmit={e => handleSubmit(e)}
    >
      <h2>Email Me!</h2>
      <div id="connect-form-content">
        <div id="connect-form-main" className="flex col">
          {/* ---- NAME ---- */}
          <label htmlFor="name" data-label="Name">
            <input
              name="name"
              placeholder="Jane Doe"
              onInput={e => handleInput(e)}
              required
            />
          </label>
          {/* ---- EMAIL ---- */}
          <label htmlFor="email" className="section" data-label="Email">
            <input
              type="email"
              name="email"
              placeholder="janedoe@domain.com"
              onInput={e => handleInput(e)}
              required
            />
          </label>
          {/* ---- OCCUPATION ---- */}
          <label htmlFor="occupation" className="section" data-label="I am...">
            <SelectBox
              options={occupations}
              field="occupation"
              classList={[]}
              onChange={e => handleInput(e)}
            />
          </label>
          {/* ---- MESSAGE ---- */}
          <label
            htmlFor="message"
            data-label="Message"
            // data-remaining={msgMax - formContent.message.length}
            data-remaining={
              msgInput.current && msgMax - msgInput.current.value.length
            }
          >
            <textarea
              ref={msgInput}
              name="message"
              placeholder="Hey Julian! Are you available for hire?"
              maxLength={msgMax}
              onInput={e => handleInput(e)}
              required
            />
          </label>
        </div>
        <div id="connect-form-extra" className={askMore ? "active" : ""}>
          <label htmlFor="interest" data-label="What interested you?">
            <select name="interest">
              {interests.map((entry, i) => (
                <option key={i} value={entry}>
                  {entry}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
