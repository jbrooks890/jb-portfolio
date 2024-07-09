export const projects = [
  {
    name: "MDDV.com",
    type: "Website",
    section: ["Developer"],
    featured: true,
    description:
      "The company website for American Data Solutions (ADS) and its proprietary IETM software, MDDV.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    link: "https://mddv.com/",
    icon: "xword-logo",
    colors: {
      key: "#08c",
      alt: "white",
      dark: "black",
      reverse: false,
    },
    images: [
      { src: "projects/mddv-1.png" },
      { src: "projects/mddv-2.png" },
      { src: "projects/mddv-3.png" },
      { src: "projects/mddv-4.png" },
    ],
  },
  {
    name: "Worlds of EPOCH",
    type: "Website",
    isWip: false,
    section: ["Developer"],
    featured: true,
    repo: {
      platform: "",
      link: "",
    },
    description:
      "The official website of my independent publishing company EPOCH Studios.",
    meta: {},
    tech: ["Squarespace", "JavaScript", "HTML", "CSS"],
    link: "https://www.worldsofepoch.com/",
    icon: "epoch-logo",
    colors: {
      key: "#feee36",
      alt: "#6c9393",
      dark: "#161d1d",
      reverse: false,
    },
    images: [
      { src: "projects/epoch-site-1.png" },
      { src: "projects/epoch-site-2.png" },
    ],
  },
  {
    name: "XWord",
    type: "Game",
    isWip: false,
    section: ["Developer", "Game"],
    featured: true,
    repo: {
      platform: "Github",
      link: "https://github.com/jbrooks890/crossword",
    },
    description:
      "A crossword puzzle application built on an original grid-based architecture for creating and playing trivia-based puzzle games.",
    meta: {},
    tech: ["React", "MongoDB"],
    link: "https://xword-app-beta.netlify.app/",
    icon: "xword-logo",
    colors: {
      key: "#5b42ff",
      alt: "#8840f2",
      alt2: "#51f23f",
      dark: "#150330",
      reverse: false,
    },
    images: [{ src: "projects/xword-1.png" }, { src: "projects/xword-3.png" }],
  },
  {
    name: "PokéSquad",
    type: "Website",
    isWip: true,
    section: ["Developer"],
    featured: true,
    repo: {
      platform: "Github",
      link: "https://github.com/jbrooks890/Poke-Squad",
    },
    description:
      "A fun companion app that queries the _PokéAPI_, enabling users to simulate building their ideal Pokémon teams for Nintendo's popular _Pokémon_ games.",
    meta: {},
    tech: ["React", "Postman"],
    link: "https://pokesquad.netlify.app/",
    icon: "pokesquad-logo",
    colors: {
      key: "#ff0000",
      alt: "#fff",
      dark: "",
      reverse: true,
    },
    images: [
      { src: "projects/pokesquad-1.png" },
      { src: "projects/pokesquad-2.png" },
    ],
  },

  {
    name: "Web Reader",
    type: "App",
    isWip: false,
    section: ["Developer"],
    featured: false,
    repo: {
      platform: "",
      link: "",
    },
    description:
      "An original reading application developed for viewing dynamic story content and metadata on independent publishing websites.",
    meta: {},
    tech: ["Squarespace", "JavaScript", "HTML", "CSS"],
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
    isWip: false,
    section: ["Writer", "Artist", "WIP"],
    featured: true,
    repo: {
      platform: "",
      link: "",
    },
    description:
      "A Fantasy/Sci-Fi series following Kyran on his epic journey to stop the Exxarians from undoing all Created.",
    meta: {
      genre: ["Fantasy", "Sci-Fi"],
      imprint: "EXP",
    },
    tech: ["HTML", "CSS", "JavaScript", "Photoshop", "Illustrator", "InDesign"],
    link: "https://www.worldsofepoch.com/arcan",
    icon: "arcan-logo",
    colors: {
      key: "#00bfa7",
      alt: "",
      dark: "#000",
      reverse: false,
    },
    images: [{ src: "gallery/arcan__web-Banner.jpg" }],
  },
  {
    name: "The Dark Ones",
    type: "Story",
    isWip: true,
    section: ["Writer", "WIP"],
    featured: false,
    repo: {
      platform: "",
      link: "",
    },
    description:
      "Enoch, the apprentice of a great Guardian Angel, is left to defend Calvin and the rest of his family when they come under attack by both fiends of the spiritual plane and greedy corporate moguls.",
    meta: {
      genre: ["Fantasy", "Sci-Fi"],
      imprint: "EXP",
      publisher: "EPOCH Studios",
    },
    tech: [],
    link: "",
    icon: "",
    colors: {
      key: "",
      alt: "",
      dark: "",
      reverse: false,
    },
    images: [],
  },
  {
    name: "Vie",
    type: "Board Game",
    isWip: true,
    section: ["Game", "WIP"],
    featured: true,
    repo: {
      platform: "",
      link: "",
    },
    description:
      "A board game that fuses the concepts of playing cards, chess and Fantasy elements where players compose an army and devise strategies to seize their opponent's crown while also defending their own castle.",
    meta: {
      developer: "Crymsica",
      publisher: "EPOCH Studios",
      genre: ["Fantasy", "Sci-Fi"],
    },
    tech: ["Photoshop", "Illustrator", "JavaScript"],
    link: "https://www.worldsofepoch.com/vie",
    icon: "vie-crown",
    colors: {
      key: "#ff9f7d",
      alt: "#896883",
      dark: "#2e2e47",
      reverse: false,
    },
    images: [{ src: "gallery/vie__web-Banner.jpg" }],
  },
  {
    name: "Gigaslayer",
    type: "Game",
    isWip: true,
    section: ["Game", "WIP"],
    featured: false,
    repo: {
      platform: "PC",
      link: "",
    },
    description: (
      <>
        A classic JRPG-style video game about a young boy named Adam who
        ventures off to hunt down <i>Gigas</i> and their troublesome spawn that
        have run rampant since their recent reawakening.
      </>
    ),
    meta: {
      developer: "Crymsica",
      publisher: "EPOCH Studios",
      genre: ["JRPG", "RPG", "Fantasy"],
    },
    tech: ["RPG Maker MZ", "JavaScript"],
    link: "",
    icon: "",
    colors: {
      key: "",
      alt: "",
      dark: "",
      reverse: false,
    },
    images: [],
  },
  {
    name: "Andromata",
    type: "Story",
    isWip: true,
    section: ["Writer", "WIP"],
    featured: false,
    repo: {
      platform: "",
      link: "",
    },
    description:
      "In the very distant future, Earth has ventured into space and thusly earned its share of extraterrestrial adversaries. Dash and Aniko are selected as combat pilots for the UXG's new Armanaut program, debuting a new type of mech: Megaframes with Andromata as its flagship.",
    meta: {
      genre: ["Sci-Fi"],
      imprint: "EXP",
      publisher: "EPOCH Studios",
    },
    tech: [],
    link: "",
    icon: "",
    colors: {
      key: "",
      alt: "",
      dark: "",
      reverse: false,
    },
    images: [],
  },

  {
    name: "Convergence",
    type: "Game",
    isWip: true,
    section: ["Game", "WIP"],
    featured: false,
    repo: {
      platform: "PC",
      link: "",
    },
    description:
      "Zara, prodigy of the Vagrant Witches, has thrown the world into calamity by attempting to perform Convergence. Silas and his companions must stop her before she attempts to perform the ritual a second time.",
    meta: {
      developer: "Crymsica",
      publisher: "EPOCH Studios",
      genre: ["JRPG", "RPG", "Fantasy"],
    },
    tech: ["Unity", "C#", "Maya", "ZBrush"],
    link: "",
    icon: "",
    colors: {
      key: "",
      alt: "",
      dark: "",
      reverse: false,
    },
    images: [],
  },
  {
    name: "Crymsica",
    type: "Brand",
    isWip: false,
    section: ["Game"],
    featured: false,
    repo: {
      platform: "",
      link: "",
    },
    description:
      "Crymsica Games is the division of EPOCH Studios dedicated to the development of video games and other visual media.",
    meta: {},
    tech: [],
    link: "",
    icon: "crymsica-lion",
    colors: {
      key: "#d10000",
      alt: "",
      dark: "#00000",
      reverse: false,
    },
    images: [],
  },
  {
    name: "T2 Com-bat",
    type: "Brand",
    isWip: false,
    section: ["Artist"],
    featured: true,
    repo: {
      platform: "",
      link: "",
    },
    description:
      "The Com-bat mascot of the MC-130H Combat Talon II aircraft is a symbol of its decades-long legacy in the Air Force Special Operations Command. This redesign was an effort to modernize its aesthetic while still honoring its history.",
    meta: {
      client: "15th AMU, U.S. Air Force",
    },
    tech: ["Illustrator", "Photoshop"],
    link: "",
    icon: "",
    colors: {
      key: "",
      alt: "",
      dark: "",
      reverse: false,
    },
    images: [
      { src: "gallery/t2__web.jpg" },
      { src: "gallery/t2-patch__web.jpg" },
    ],
  },
  {
    name: (
      <>
        War Love<span className="subtitle">by Jessica Lá Rel</span>
      </>
    ),
    type: "Album Cover",
    isWip: false,
    section: ["Artist"],
    featured: true,
    repo: {
      platform: "",
      link: "",
    },
    description: (
      <>
        The cover art for R&B/Soul artist Jessica Lá&nbsp;Rel's debut album,{" "}
        <i>War&nbsp;Love </i>.
      </>
    ),
    meta: {
      client: "Jessica Anderson (aka Jessica Lá Rel)",
    },
    tech: ["Illustrator", "Photoshop"],
    link: "https://jessicalarel.com/music/",
    icon: "",
    colors: {
      key: "",
      alt: "",
      dark: "",
      reverse: false,
    },
    images: [{ src: "gallery/war-love__web.jpg" }],
  },
];
