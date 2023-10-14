import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-stroke-icon.svg";
// import "../../styles/TopBtn.css";

export default function TopBtn({ destination = window, className }) {
  // console.log({ destination });

  return (
    <div
      className={`nav-to-top relative mx-auto flex w-fit flex-col self-center`.concat(
        " ",
        className,
      )}
      data-tooltip="Top"
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          destination?.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="arrow-wrapper"
      >
        <ArrowIcon className="aspect-square h-8 -rotate-90 stroke-lavender stroke-[3px]" />
      </button>
    </div>
  );
}
