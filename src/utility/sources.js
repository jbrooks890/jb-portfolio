const projects = [
  {
    name: "MDDV.com",
    type: "Website",
    section: ["Developer"],
    featured: true,
    description: "The official website for American Data Solutions (ADS)",
    tech: ["React", "Javascript", "HTML", "CSS"],
    link: "https://mddv.com/",
    icon: "xword-logo",
    colors: {
      key: "#08c",
      alt: "white",
      dark: "black",
      reverse: false,
    },
    images: ["mddv-1.png", "mddv-2.png", "mddv-3.png", "mddv-4.png"],
  },
  {
    name: "XWord",
    type: "Game",
    section: ["Developer"],
    featured: true,
    description:
      "A React app to play and create trivia-based crossword puzzle games.",
    tech: ["React", "Javascript", "HTML", "CSS"],
    link: "https://xword-app-beta.netlify.app/",
    icon: "xword-logo",
    colors: {
      key: "#fff",
      alt: "silver",
      dark: "black",
      reverse: false,
    },
    images: ["xword-1.png", "xword-2.png", "xword-3.png"],
  },
  {
    name: "PokéSquad",
    type: "App",
    section: ["Developer"],
    featured: true,
    description:
      "A fun companion app to plan and build your Pokémon team, a beginner's first foray into React development.",
    tech: ["React", "Javascript", "HTML", "CSS", "Postman"],
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
    name: "Web Reader App",
    type: "App",
    section: ["Developer"],
    featured: false,
    description:
      "An original reading application developed for viewing dynamic story content and metadata on independent publishing websites.",
    tech: ["Squarespace", "Javascript", "HTML", "CSS"],
    link: "https://www.worldsofepoch.com/anthology/the-boy-who-dreamed",
    icon: "epoch-logo",
    colors: {
      key: "",
      alt: "",
      dark: "",
      reverse: false,
    },
    images: [],
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

const quotes = [
  {
    entry: "Art is never finished, only abandoned.",
    author: "Leonardo da Vinci",
  },
  {
    entry: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    entry: "If you're going through hell, keep going.",
    author: "Winston Churchill",
  },
  {
    entry: "Never give up and good luck will find you.",
    author: "Falcor, _The NeverEnding Story_",
  },
  {
    entry: "Fortune favors the brave",
    translation: "audentes Fortuna adiuvat (Latin)",
  },
];

export { projects, quotes };
