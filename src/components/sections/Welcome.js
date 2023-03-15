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
import ModeSelector from "../frags/ModeSelector";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Welcome({ pages, mode }) {
  const titles = pages.map(page => page.title);
  const $pages = [...titles, "Resume", "Connect"];
  const [activated, setActivated] = useState(false);
  const [dimensions, setDimensions] = useState({
    vw: window.innerWidth,
    vh: window.innerHeight,
  });
  const [siteMode, setSiteMode] = useSiteMode();
  const [modePreview, setModePreview] = useState(mode ? mode : siteMode);
  const [rotation, setRotation] = useState(0); // DEGREES
  const [modalContent, setModalContent] = useState();

  const { vw, vh } = dimensions;
  const vmin = vh < vw ? vh : vw;
  // const vmax = vh > vw ? vh : vw;
  const vavg = (vh + vw) / 2;
  const size = vmin * 0.8;
  const center = size / 2;
  const rad = size / 2;
  const ang = (2 * Math.PI) / $pages.length;
  const offset = ang;
  const style = { width: size, height: size };
  const { isShowing, toggle } = useModal();
  const $MOBILE = useMediaQuery();
  const $CAN_HOVER = useMediaQuery("hover");

  const handleResize = debounce(() =>
    setDimensions({
      vw: window.innerWidth,
      vh: window.innerHeight,
    })
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(
    () => modePreview !== siteMode && setModePreview(siteMode),
    [siteMode]
  );

  const triggerModal = component => {
    setModalContent(component);
    toggle();
  };

  // console.log({ rad, ang });
  const modeProps = new Map([
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
    <section id="welcome" className="site-section flex col center">
      <div
        id="radial-controller"
        className={`flex col center ${activated ? "activated" : ""}`}
        style={style}
      >
        <h2 id="welcome-logo" onClick={() => setActivated(prev => !prev)}>
          <JB_LOGO />
          {!$MOBILE && (
            <div className="mode-title">
              {modePreview.split("").map((letter, i) => (
                <span key={i} style={{ ["--i"]: i }}>
                  {letter}
                </span>
              ))}
            </div>
          )}
        </h2>

        {!$MOBILE && (
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
                  size={Math.floor(vavg * 0.06)}
                  angle={ang}
                  offset={offset}
                  active={siteMode === page}
                  onClick={modeProps.get(page).click}
                  onMouseEnter={() => $CAN_HOVER && setModePreview(page)}
                  onMouseLeave={() => $CAN_HOVER && setModePreview(siteMode)}
                >
                  {modeProps.get(page).icon ? (
                    <svg style={{ width: "100%" }}>
                      <use href={`#${modeProps.get(page).icon}`} />
                    </svg>
                  ) : (
                    page
                  )}
                </RadButton>
              );
            })}
          </div>
        )}
      </div>
      <ModeSelector
        pages={titles}
        modeProps={modeProps}
        mode={siteMode}
        ready={activated}
      />

      {isShowing && (
        <Modal isShowing={isShowing} hide={toggle}>
          {modalContent}
        </Modal>
      )}
    </section>
  );
}
