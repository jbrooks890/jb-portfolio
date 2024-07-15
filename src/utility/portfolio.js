import { ReactComponent as CODE_ICON } from "../../src/assets/icons/code-icon.svg";
import { ReactComponent as LEGACY_ICON } from "../../src/assets/icons/legacy-logo.svg";
import { ReactComponent as BOOK_ICON } from "../../src/assets/icons/book-icon.svg";
export const portfolioData = {
  pages: [
    {
      title: "Developer",
      flavorTitle: "a Developer",
      Icon: CODE_ICON,
      slug: "developer",
      sections: ["Projects", "About", "Connect"],
      summary: "",
      blurb:
        "My developer experience began with my attempt to make a 16-bit video game in high school. In college, I learned the fundamentals of web design and development. After a years-long hiatus, I rekindled my skills by creating the _EPOCH\u00A0Studios_ website, exhausting myself of Squarespace before finally learning _React_.",
    },
    {
      title: "Artist",
      flavorTitle: "an Artist",
      Icon: LEGACY_ICON,
      slug: "artist",
      sections: ["Gallery", "About", "Connect"],
      summary: "",
      blurb: `Art has been a passion of mine since childhood. My inspiration came
      from many sources, but primarily cartoons, games and movies. I have
      worked as a freelance artist with clients including music artists,
      school alumni boards and the U.S. Air Force.`,
    },

    {
      title: "Writer",
      flavorTitle: "a Writer",
      Icon: BOOK_ICON,
      slug: "writer",
      sections: ["Projects", "About", "Connect"],
      summary: "",
      blurb: `I have always written as much as I've drawn, words being another deeply-rooted form of expression for me. I enjoy the “what-ifs” of life and explore those notions in my writing. In 2016, I self-published my Fantasy/Sci-Fi novel, _Arcan: The Missing Nexus_ under my own imprint EPOCH Studios. I have since penned smaller projects that allow me to explore my other ideas.`,
    },
  ],
};
