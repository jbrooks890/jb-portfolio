import { useState } from "react";
import { useParams } from "react-router-dom";
import Welcome from "../sections/Welcome";
import About from "../sections/About";
import Gallery from "../sections/Gallery";
import Contact from "../sections/Contact";

export default function Main() {
  const pages = ["Developer", "Artist", "Writer", "Game"];
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <main>
      <Welcome pages={pages} />
      <Gallery />
      <About />
      <Contact />
    </main>
  );
}
