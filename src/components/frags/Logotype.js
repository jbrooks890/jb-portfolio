import { resumeData } from "../../utility/resume";
// import "../../styles/Logotype.css";

export default function Logotype({ className }) {
  const { firstName, lastName } = resumeData.profile;

  return (
    <div className={`logotype w-fit text-day ${className ?? ""}`}>
      <h2 className="m-0 text-8xl leading-none text-inherit">{firstName}</h2>
      <h3 className="mb-0 flex justify-between px-1 text-4xl uppercase leading-none">
        {lastName.split("").map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </h3>
    </div>
  );
}
