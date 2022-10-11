import Welcome from "../sections/Welcome";
import About from "../sections/About";
import Gallery from "../sections/Gallery";
import Contact from "../sections/Contact";

export default function Main() {
  const pages = ["Developer", "Artist", "Writer", "Game"];

  return (
    <main>
      <Welcome pages={pages} />
        <Gallery />
        <About pages={pages} />
        <Contact />
    </main>
  );
}
