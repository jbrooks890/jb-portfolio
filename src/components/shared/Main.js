import { useState } from "react";
import { Routes, useParams } from "react-router-dom";
import Welcome from "../sections/Welcome";
import About from "../sections/About";
import Gallery from "../sections/Gallery";
import Contact from "../sections/Contact";
import Resume from "../frags/Resume";
import { ModeProvider } from "./ModeProvider";
// import Sandbox from "../sections/Sandbox";

export default function Main() {
  const pages = ["Developer", "Artist", "Writer", "Game"];
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <main>
      <ModeProvider>
        <Welcome pages={pages} />
        {/* <Sandbox /> */}
        <Gallery />
        <About pages={pages} />
        <Contact />
      </ModeProvider>
    </main>
  );
}
