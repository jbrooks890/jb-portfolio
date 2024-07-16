import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-stroke-icon.svg";

export default function DateHeading({ name, start, end, className }) {
  return (
    <div
      className={`date-heading flex items-center justify-between rounded-md bg-nite px-4 py-2 text-xl text-white ${
        className ?? ""
      }`}
    >
      <div className="entry-insitution-name m-0 text-left">{name}</div>
      <div className="entry-active-dates m-0 ml-4 flex items-center space-x-2">
        <span className="start-date">{start}</span>
        <ArrowIcon className="to-arrow h-3 overflow-visible stroke-lavender stroke-2" />
        <span className="end-date">{end ?? "Present"}</span>
      </div>
    </div>
  );
}
