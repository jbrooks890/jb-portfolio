import Welcome from "../sections/Welcome";
import About from "../sections/About";
import Gallery from "../sections/Gallery";
import Contact from "../sections/Contact";
import { useParams } from "react-router-dom";
import { useSiteMode } from "./ModeProvider";
import { useEffect } from "react";

export default function Main() {
  const [_, setSiteMode] = useSiteMode();
  const pages = ["Developer", "Artist", "Writer", "Game"];
  const { mode } = useParams();

  useEffect(() => {
    mode && setSiteMode(mode);
  }, [mode]);

  return (
    <main>
      <Welcome
        pages={pages}
        mode={mode ? mode[0].toUpperCase(1) + mode.slice(1) : null}
      />
      <Gallery />
      <About pages={pages} />
      <Contact />
    </main>
  );
}
