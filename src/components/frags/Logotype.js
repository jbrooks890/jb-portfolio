import { resumeData } from "../../utility/resume";
import "../../styles/Logotype.css";

export default function Logotype() {
  const { firstName, lastName } = resumeData.profile;

  return (
    <div className="logotype name">
      <h2>{firstName}</h2>
      <h3 className="flex">
        {lastName.split("").map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </h3>
    </div>
  );
}
