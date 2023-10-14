import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-stroke-icon.svg";

export default function DateHeading({ name, start, end, className }) {
  return (
    <div
      className={"date-heading flex items-center justify-between rounded-md bg-nite px-4 py-2".concat(
        " ",
        className,
      )}
    >
      <h3 className="entry-insitution-name m-0 text-left text-xl text-lavender">
        {name}
      </h3>
      <h4 className="entry-active-dates m-0 ml-4 flex items-center space-x-2 text-day">
        <span className="start-date">{start}</span>
        <ArrowIcon className="to-arrow h-3 stroke-lavender stroke-2" />
        <span className="end-date">{end ?? "Present"}</span>
      </h4>
    </div>
  );
}
