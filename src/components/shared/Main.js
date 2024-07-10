import Welcome from "../sections/Welcome";
import About from "../sections/About";
import Gallery from "../sections/Gallery";
import Contact from "../sections/Contact";
import { useParams } from "react-router-dom";
import { useSiteMode } from "./ModeProvider";
import { useEffect } from "react";
import { portfolioData } from "../../utility/portfolio";
import Page from "../layout/Page";
import { capitalize } from "../../lib/utility/helperFns";

export default function Main() {
  const [_, setSiteMode] = useSiteMode();
  const { pages } = portfolioData;
  const { mode } = useParams();

  useEffect(() => {
    mode && setSiteMode(mode);
  }, [mode]);

  return (
    <Page>
      <Welcome pages={pages} mode={mode ? capitalize(mode) : null} />
      <Gallery />
      <About pages={pages} />
      <Contact />
    </Page>
  );
}
