import Welcome from "../sections/Welcome";
import About from "../sections/About";
import Gallery from "../sections/Gallery";
import Contact from "../sections/Contact";
import { ModeProvider } from "./ModeProvider";

export default function Main() {
  const pages = ["Developer", "Artist", "Writer", "Game"];

  return (
    <main>
      <ModeProvider>
        <Welcome pages={pages} />
        <Gallery />
        <About pages={pages} />
        <Contact />
      </ModeProvider>
    </main>
  );
}
