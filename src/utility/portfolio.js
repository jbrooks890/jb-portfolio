import { ReactComponent as CODE_ICON } from "../../src/assets/icons/code-icon.svg";
import { ReactComponent as LEGACY_ICON } from "../../src/assets/icons/legacy-logo.svg";
import { ReactComponent as BOOK_ICON } from "../../src/assets/icons/book-icon.svg";
export const portfolioData = {
  pages: [
    {
      title: "Artist",
      flavorTitle: "an Artist",
      Icon: LEGACY_ICON,
      slug: "artist",
      sections: ["Gallery", "About", "Connect"],
      blurb: `Art has been a passion of mine since childhood. My inspiration came
      from many sources, but primarily cartoons, games and movies. I have
      worked as a freelance artist with clients including music artists,
      school alumni boards and the U.S. Air Force.`,
    },
    {
      title: "Developer",
      flavorTitle: "a Developer",
      Icon: CODE_ICON,
      slug: "developer",
      sections: ["Projects", "About", "Connect"],
      blurb: `My developer experience began in high school when I wanted to make 16-bit style RPG video games using _RPG Maker XP_. I was introduced to the fundamentals of web development in college where I learned HTML, CSS and JavaScript. After a hiatus, during which I joined the military, I found my way back to coding and web development when I created the _EPOCH\u00A0Studios_ website with Squarespace. The limits of a website builder quickly became undeseriable, which ultimately led me to _React_.`,
    },
    {
      title: "Writer",
      flavorTitle: "a Writer",
      Icon: BOOK_ICON,
      slug: "writer",
      sections: ["Projects", "About", "Connect"],
      blurb: `I have always written as much as I've drawn, words being another deeply-rooted form of expression for me. I enjoy the “what-ifs” of life and explore those notions in my writing. In 2016, I self-published my Fantasy/Sci-Fi novel, _Arcan: The Missing Nexus_ under my own imprint EPOCH Studios. I have since penned smaller projects that allow me to explore my other ideas.`,
    },
    // {
    //   title: "Game",
    //   flavorTitle: "a Game Developer",
    //   slug: "game",
    //   sections: ["Projects", "About", "Connect"],
    //   blurb: (
    //     <>
    //       I was first introduced to game development in high school with{" "}
    //       <strong>RPG Maker XP</strong>. I immediately became fascinated with
    //       game design's multi-faceted formula, though the prospect of learning{" "}
    //       <i>Ruby</i> overwhelmed me as a freshman. Regardless, it was an excuse
    //       to to draw, write <i>and</i> (learn to) code! Since then, I've worked
    //       diligently to improve my skills in each concentration in my endeavor
    //       to one day call myself a game dev
    //       <span className="mdash" />
    //       officially.
    //     </>
    //   ),
    // },
  ],
};
