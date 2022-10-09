import "../../styles/TopBtn.css";

export default function TopBtn({ destination, concise }) {
  const target = destination ? destination : "#top";

  return (
    <div className="nav-to-top flex col" data-tooltip="Top">
      <a href={target} className="arrow-wrapper">
        <svg>
          <use href="#arrow-icon" />
        </svg>
      </a>
    </div>
  );
}
