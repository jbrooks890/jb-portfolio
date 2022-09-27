const projects = [
  {
    name: "XWord",
    type: "Game",
    section: ["Developer", "Game"],
    featured: true,
    description:
      "A React app to play and create trivia-based crossword puzzle games.",
    tech: ["React", "Javascript", "HTML", "CSS"],
    link: "https://xword-app-beta.netlify.app/",
    icon: "xword-logo",
    colors: {
      key: "#fff",
      alt: "silver",
      dark: "#black",
      reverse: false,
    },
    images: ["xword-1.png", "xword-2.png", "xword-3.png"],
  },
  {
    name: "PokéSquad",
    type: "App",
    section: ["Developer"],
    featured: true,
    description: "A companion app to plan and build your Pokémon team.",
    tech: ["React", "Javascript", "HTML", "CSS"],
    link: "https://pokesquad.netlify.app/",
    icon: "pokesquad-logo",
    colors: {
      key: "#ff0000",
      alt: "#fff",
      dark: "",
      reverse: true,
    },
    images: ["pokesquad-1.png", "pokesquad-2.png"],
  },
  {
    name: "Worlds of EPOCH",
    type: "Website",
    section: ["Developer"],
    featured: true,
    description:
      "The official website of my independent publishing company EPOCH Studios.",
    tech: ["Squarespace", "Javascript", "HTML", "CSS"],
    link: "https://www.worldsofepoch.com/",
    icon: "epoch-logo",
    colors: {
      key: "#feee36",
      alt: "#6c9393",
      dark: "#161d1d",
      reverse: false,
    },
    images: ["epoch-site-1.png", "epoch-site-2.png"],
  },
  {
    name: "Arcan",
    type: "Story",
    section: ["Writer", "WIP"],
    featured: true,
    description:
      "A Fantasy/Sci-Fi series by yours truly, following Kyran on his journey to stop the Exxarians from undoing all Created.",
    tech: [],
    link: "https://www.worldsofepoch.com/arcan",
    icon: "arcan-logo",
    colors: {
      key: "#00bfa7",
      alt: "",
      dark: "#000",
      reverse: false,
    },
  },
];

export { projects };
