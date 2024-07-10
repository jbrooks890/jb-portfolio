import { useEffect, useState, useMemo } from "react";
import { ReactComponent as JB_LOGO } from "../../assets/icons/jb-logo.svg";
import { ReactComponent as RESUME_ICON } from "../../assets/icons/profile-icon.svg";
import { ReactComponent as CONNECT_ICON } from "../../assets/icons/connect-icon.svg";
// import "../../styles/Welcome.css";
import RadButton from "../frags/RadButton";
import { debounce } from "../../utility/utility";
import useModal from "../hooks/useModal";
import Modal from "../shared/Modal";
import ConnectForm from "../frags/ConnectForm";
import Resume from "../frags/Resume";
import { useSiteMode } from "../shared/ModeProvider";
import ModeSelector from "../frags/ModeSelector";
import useMediaQuery from "../hooks/useMediaQuery";
import Section from "../layout/Section";
import { portfolioData } from "../../utility/portfolio";
import Block from "../layout/Block";
import Markdown from "markdown-to-jsx";
import RadioMenu from "../layout/RadioMenu";

export default function Welcome({ pages, mode }) {
  const titles = pages.map(({ title }) => title);
  const [activated, setActivated] = useState(false);
  const [dimensions, setDimensions] = useState({
    vw: window.innerWidth,
    vh: window.innerHeight,
  });
  const [siteMode, setSiteMode] = useSiteMode();
  const [modePreview, setModePreview] = useState(mode ?? siteMode);
  const [modalContent, setModalContent] = useState();

  // const { vw, vh, size } = useMemo(() => {
  //   const vw = window?.innerWidth,
  //     vh = window?.innerHeight,
  //     vmin = vh < vw ? vh : vw,
  //     size = vmin * 0.8;

  //   return;
  // }, [window?.innerWidth, window?.innerHeight]);
  const { vw, vh } = dimensions;
  const vmin = vh < vw ? vh : vw;
  const size = vmin * 0.8;
  const style = { width: size, height: size };
  // ----------------------------------------------------------
  const { isShowing, toggle } = useModal();
  const $MOBILE = useMediaQuery();
  const $CAN_HOVER = useMediaQuery("hover");
  const { flavorTitle } = pages.find(
    ({ title }) => title === (mode || siteMode),
  );
  // console.log({ titles });

  const handleResize = debounce(() =>
    setDimensions({
      vw: window.innerWidth,
      vh: window.innerHeight,
    }),
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(
    () => modePreview !== siteMode && setModePreview(siteMode),
    [siteMode],
  );

  const triggerModal = (component) => {
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
    // ["Game", { icon: "game-icon", click: () => setSiteMode("Game") }],
    [
      "Connect",
      {
        icon: "connect-icon",
        click: () => triggerModal(<ConnectForm />),
      },
    ],
    ["Resume", { icon: "profile-icon", click: () => triggerModal(<Resume />) }],
  ]);

  const pageButtons = pages.map(({ title, Icon }) => ({
    title,
    Icon,
    disabled: siteMode === title,
    handleClick: () => setSiteMode(title),
    handleMouseEnter: () => $CAN_HOVER && setModePreview(title),
    handleMouseLeave: () => $CAN_HOVER && setModePreview(siteMode),
  }));

  const otherButtons = [
    {
      title: "Resume",
      Icon: RESUME_ICON,
      handleClick: () => triggerModal(<Resume />),
      handleMouseEnter: () => $CAN_HOVER && setModePreview("Resume"),
      handleMouseLeave: () => $CAN_HOVER && setModePreview(siteMode),
    },
    {
      title: "Connect",
      Icon: CONNECT_ICON,
      handleClick: () => triggerModal(<ConnectForm />),
      handleMouseEnter: () => $CAN_HOVER && setModePreview("Connect"),
      handleMouseLeave: () => $CAN_HOVER && setModePreview(siteMode),
    },
  ];

  return (
    <Section
      id="welcome"
      className="site-section relative flex flex-col bg-midnite pb-12 text-white"
      type="wide"
      tight
    >
      <div className="island relative h-screen">
        <div
          id="radial-controller"
          className={`island group relative rounded-[50%] bg-gradient-circle from-nite via-transparent ${
            activated ? "activated" : "unactivated"
          }`}
          style={style}
        >
          <h2
            id="welcome-logo"
            className={`relative z-10 w-[50vmin] cursor-pointer fill-red text-red drop-shadow-[3px_3px_0_#00000020] duration-200 ease-linear ${
              activated ? "" : "scale-125"
            }`}
            onClick={() => setActivated((prev) => !prev)}
          >
            <JB_LOGO />
            {!$MOBILE && (
              // :::::::::::::::::{ MODE TITLE }:::::::::::::::::
              <div
                className={`mode-title absolute bottom-1 right-1 text-3xl tracking-wider duration-100 ease-out ${
                  activated ? "opacity-100" : "opacity-0"
                }`}
              >
                {modePreview.split("").map((letter, i) => (
                  <span
                    key={i}
                    className={`inline-block duration-200 ease-out ${
                      activated
                        ? "text-red hover:animate-flicker"
                        : "translate-y-[-0.5em] text-lavender opacity-0"
                    }`}
                    style={{
                      ["--i"]: i,
                      transitionDelay: activated
                        ? 700 + 100 * i + "ms"
                        : undefined,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            )}
          </h2>
          {!$MOBILE && (
            <RadioMenu
              contents={[...pageButtons, ...otherButtons]}
              className="rounded-[50%]"
              buttonStyles={`[&>svg]:aspect-[4/3] text-lavender ${
                activated
                  ? "opacity-50 hover:scale-110 hover:opacity-100 disabled:scale-110 disabled:opacity-100 disabled:animate-flicker"
                  : "scale-50 opacity-0"
              }`}
            />
          )}
        </div>
        <ModeSelector
          pages={titles}
          modeProps={modeProps}
          mode={siteMode}
          ready={activated}
        />
      </div>
      {/* ----------[ GREETING ]---------- */}
      <Block className="salute-wrapper grid w-[1024px] grid-cols-2 self-center">
        <h2 className="salute inline-head col-start-1 mb-4 text-left text-5xl text-lavender [&>em]:mx-[0.1em] [&>em]:inline-block [&>em]:rotate-2 [&>em]:scale-110 [&>em]:not-italic [&>em]:brightness-125">
          <span className="block text-4xl text-red">I'm Julian, hi.</span>I like{" "}
          <em>art</em> and <em>code</em>.
        </h2>
        <Markdown
          options={{ forceBlock: true }}
          className="col-start-1 text-left text-2xl text-day"
        >
          {`I'm ${flavorTitle.toLowerCase()} based in Georgia, just outside of **Atlanta**, where you'll find me making something cool. Making what, you ask? Depends on what **_mode_** I'm in.`}
        </Markdown>
      </Block>

      {isShowing && (
        <Modal isShowing={isShowing} hide={toggle}>
          {modalContent}
        </Modal>
      )}
    </Section>
  );
}
