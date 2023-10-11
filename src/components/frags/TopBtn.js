import "../../styles/TopBtn.css";

export default function TopBtn({ destination, concise }) {
  const target = destination ? destination : "#top";

  return (
    <div className="nav-to-top flex col" data-tooltip="Top">
      <button
        onClick={e => {
          e.preventDefault();
          window?.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="arrow-wrapper"
      >
        <svg>
          <use href="#arrow-icon" />
        </svg>
      </button>
    </div>
  );
}
