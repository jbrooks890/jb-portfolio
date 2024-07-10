import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-stroke-icon.svg";
// import "../../styles/TopBtn.css";

export default function TopBtn({ destination = window, className }) {
  // console.log({ destination });

  return (
    <button
      onClick={(e) => {
        console.log({ destination });
        e.preventDefault();
        destination.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={`nav-to-top group relative mx-auto flex w-fit flex-col items-center self-center ${
        className ?? ""
      }`}
    >
      <ArrowIcon className="group-hover:animate-bob aspect-square h-8 -rotate-90 overflow-visible stroke-lavender stroke-[3px]" />
      <span className="-translate-y-1/2 text-lg uppercase leading-none tracking-wider opacity-0 duration-200 ease-in group-hover:translate-y-0 group-hover:opacity-100">
        Top
      </span>
    </button>
  );
}
