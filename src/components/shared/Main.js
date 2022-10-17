import Welcome from "../sections/Welcome";
import About from "../sections/About";
import Gallery from "../sections/Gallery";
import Contact from "../sections/Contact";
import { useParams } from "react-router-dom";

export default function Main() {
  const pages = ["Developer", "Artist", "Writer", "Game"];
  const { mode } = useParams();
  console.log({ mode });

  return (
    <main>
      <Welcome pages={pages} />
      <Gallery />
      <About pages={pages} />
      <Contact />
    </main>
  );
}
