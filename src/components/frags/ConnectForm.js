import { useState } from "react";
import "../../styles/ConnectForm.css";

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
  const msgMax = 300;

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formContent);
  };

  const handleInput = e => {
    const { name, value } = e.target;
    updateFormContent(prev => ({
      ...prev,
      [name]: value,
    }));
  };

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
            />
          </label>
          {/* ---- EMAIL ---- */}
          <label htmlFor="email" className="section" data-label="Email">
            <input
              type="email"
              name="email"
              placeholder="janedoe@domain.com"
              onInput={e => handleInput(e)}
            />
          </label>
          {/* ---- OCCUPATION ---- */}
          <label htmlFor="occupation" className="section" data-label="I am...">
            <select name="occupation">
              {occupations.map((entry, i) => (
                <option key={i} value={entry}>
                  {entry}
                </option>
              ))}
            </select>
          </label>
          {/* ---- MESSAGE ---- */}
          <label
            htmlFor="message"
            data-label="Message"
            data-remaining={msgMax - formContent.message.length}
          >
            <textarea
              name="message"
              placeholder="Hey Julian! Are you available for hire?"
              maxLength={msgMax}
              onInput={e => handleInput(e)}
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
