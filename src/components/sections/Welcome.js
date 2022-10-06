import { useEffect, useState } from "react";
import { ReactComponent as JB_LOGO } from "../../assets/icons/jb-logo.svg";
import "../../styles/Welcome.css";
import RadButton from "../frags/RadButton";
import { debounce } from "../../utility/utility";
import useModal from "../hooks/useModal";
import Modal from "../shared/Modal";
import ConnectForm from "../frags/ConnectForm";
import Resume from "../frags/Resume";
import { useSiteMode } from "../shared/ModeProvider";

export default function Welcome({ pages }) {
  const $pages = [...pages, "Resume", "Connect"];
  const [activated, setActivated] = useState(false);
  const [dimensions, setDimensions] = useState({
    vw: window.innerWidth,
    vh: window.innerHeight,
  });
  const [modalContent, setModalContent] = useState();
  const [siteMode, setSiteMode] = useSiteMode();
  const [modePreview, setModePreview] = useState(siteMode);
  const [rotation, setRotation] = useState(0); // DEGREES

  const { vw, vh } = dimensions;
  const vmin = vh < vw ? vh : vw;
  const size = vmin * 0.8;
  const center = size / 2;
  const rad = size / 2;
  const ang = (2 * Math.PI) / $pages.length;
  const offset = ang;
  const style = { width: size, height: size };
  const { isShowing, toggle } = useModal();

  useEffect(() => {
    function handleResize() {
      // console.log(`Resized to: ${window.innerWidth} x ${window.innerHeight}`);
      setDimensions({
        vw: window.innerWidth,
        vh: window.innerHeight,
      });
    }
    // const handleResize = () => debounce($handleResize, 1000);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const triggerModal = component => {
    setModalContent(component);
    toggle();
  };

  // console.log({ rad, ang });
  const ringProps = new Map([
    [
      "Developer",
      {
        icon: "code-icon",
        click: () => setSiteMode("Developer"),
      },
    ],
    ["Artist", { icon: "legacy-icon", click: () => setSiteMode("Artist") }],
    ["Writer", { icon: "book-icon", click: () => setSiteMode("Writer") }],
    ["Game", { icon: "game-icon", click: () => setSiteMode("Game") }],
    [
      "Connect",
      {
        icon: "connect-icon",
        click: () => triggerModal(<ConnectForm />),
      },
    ],
    ["Resume", { icon: "profile-icon", click: () => triggerModal(<Resume />) }],
  ]);

  return (
    <section id="welcome" className="site-section flex col">
      <div
        id="radial-controller"
        className={`flex col ${activated ? "activated" : ""}`}
        style={style}
      >
        <h2 id="welcome-logo" onClick={() => setActivated(prev => !prev)}>
          <JB_LOGO />
          <div className="mode-title">
            {modePreview.split("").map((letter, i) => (
              <span key={i} style={{ ["--i"]: i }}>
                {letter}
              </span>
            ))}
          </div>
        </h2>

        <div id="controller-ring">
          {$pages.map((page, i) => {
            const offset = ang * i;
            const x = center + rad * Math.cos(offset);
            const y = center + rad * Math.sin(offset);
            // console.log(`${page}:`, { x, y });

            return (
              <RadButton
                key={i}
                x={x}
                y={y}
                index={i}
                size={vmin * 0.09}
                angle={ang}
                offset={offset}
                active={siteMode === page}
                onClick={ringProps.get(page).click}
                onMouseEnter={() => setModePreview(page)}
                onMouseLeave={() => setModePreview(siteMode)}
              >
                {ringProps.get(page).icon ? (
                  <svg>
                    <use href={`#${ringProps.get(page).icon}`} />
                  </svg>
                ) : (
                  page
                )}
              </RadButton>
            );
          })}
        </div>
      </div>
      {modalContent && (
        <Modal isShowing={isShowing} hide={toggle}>
          {modalContent}
        </Modal>
      )}
    </section>
  );
}
