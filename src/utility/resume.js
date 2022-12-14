export const resumeData = {
  firstName: "Julian",
  middleName: "Christian",
  lastName: "Brooks",
  birthday: {
    month: "August",
    day: 16,
    year: 1990,
  },
  gender: "male",
  ethnicity: "Black/African-American",
  address: {
    streetNumber: 2645,
    streetName: "Rosalyn Lane",
    streetOther: "",
    streetOtherType: "",
    city: "Smyrna",
    state: "Georgia",
    zipCode: "30080-1811",
  },
  email: {
    primary: "jbrooks890@gmail.com",
    secondary: "connect@juliancbrooks.com",
    other: ["jbrooks@worldsofepoch.com", "jbrooks890@icloud.com"],
  },
  phone: {
    cell: 7738966276,
    home: 0,
    work: 0,
  },
  summary: (
    <>
      A creative <i>front-end developer</i> with an entrepreneurial drive to
      deliver effective solutions and learn leading-edge technologies.
    </>
  ),
  socialMedia: [
    {
      name: "GitHub",
      link: "https://github.com/jbrooks890",
      handle: "jbrooks890",
      icon: "github-logo",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/julian-c-brooks/",
      handle: "julian-c-brooks",
      icon: "linkedin-logo",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/julian_wrote_this/",
      handle: "julian_wrote_this",
      icon: "ig-logo",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/julianWroteThis/",
      handle: "julianWroteThis",
      icon: "fb-logo",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/julianWroteThis",
      handle: "julianWroteThis",
      icon: "twitter-logo",
    },
  ],
  projects: [
    {
      name: "Worlds of EPOCH",
      type: "Website",
      section: ["Developer"],
      featured: true,
      repo: {
        platform: "",
        link: "",
      },
      description:
        "The official website of my independent publishing company EPOCH Studios.",
      meta: {},
      tech: ["Squarespace", "Javascript", "HTML", "CSS"],
      link: "https://www.worldsofepoch.com/",
      icon: "epoch-logo",
      colors: {
        key: "#feee36",
        alt: "#6c9393",
        dark: "#161d1d",
        reverse: false,
      },
      images: {
        location: "projects",
        entries: ["epoch-site-1.png", "epoch-site-2.png"],
      },
    },
    {
      name: "XWord",
      type: "Game",
      section: ["Developer", "Game"],
      featured: true,
      repo: {
        platform: "Github",
        link: "https://github.com/jbrooks890/crossword",
      },
      description:
        "A crossword puzzle application built on an original grid-based architecture for creating and playing trivia-based puzzle games.",
      meta: {},
      tech: ["React", "Javascript", "HTML", "CSS", "MongoDB"],
      link: "https://xword-app-beta.netlify.app/",
      icon: "xword-logo",
      colors: {
        key: "#5b42ff",
        alt: "#8840f2",
        alt2: "#51f23f",
        dark: "#150330",
        reverse: false,
      },
      images: {
        location: "projects",
        entries: ["xword-1.png", "xword-3.png"],
      },
    },
    {
      name: "Pok??Squad",
      type: "App",
      section: ["Developer"],
      featured: true,
      repo: {
        platform: "Github",
        link: "https://github.com/jbrooks890/Poke-Squad",
      },
      description:
        "A companion app that queries the RESTful Pok??API, enabling users to build their custom Pok??mon teams for use with popular Pok??mon games by Nintendo.",
      meta: {},
      tech: ["React", "Javascript", "HTML", "CSS", "Postman"],
      link: "https://pokesquad.netlify.app/",
      icon: "pokesquad-logo",
      colors: {
        key: "#ff0000",
        alt: "#fff",
        dark: "",
        reverse: true,
      },
      images: {
        location: "projects",
        entries: ["pokesquad-1.png", "pokesquad-2.png"],
      },
    },

    {
      name: "Web Reader",
      type: "App",
      section: ["Developer"],
      featured: false,
      repo: {
        platform: "",
        link: "",
      },
      description:
        "An original reading application developed for viewing dynamic story content and metadata on independent publishing websites.",
      meta: {},
      tech: ["Squarespace", "Javascript", "HTML", "CSS"],
      link: "https://www.worldsofepoch.com/anthology/the-boy-who-dreamed",
      icon: "epoch-logo",
      colors: {
        key: "",
        alt: "",
        dark: "",
        reverse: false,
      },
      images: {
        location: "",
        entries: [],
      },
    },
    {
      name: "Arcan",
      type: "Story",
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
      tech: [
        "HTML",
        "CSS",
        "Javascript",
        "Photoshop",
        "Illustrator",
        "InDesign",
      ],
      link: "https://www.worldsofepoch.com/arcan",
      icon: "arcan-logo",
      colors: {
        key: "#00bfa7",
        alt: "",
        dark: "#000",
        reverse: false,
      },
      images: {
        location: "gallery",
        entries: ["arcan__web-Banner.jpg"],
      },
    },
    {
      name: "The Dark Ones",
      type: "Story",
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
      images: {
        location: "gallery",
        entries: [],
      },
    },
    {
      name: "Vie",
      type: "Board Game",
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
      tech: ["Photoshop", "Illustrator", "Javascript"],
      link: "https://www.worldsofepoch.com/vie",
      icon: "vie-crown",
      colors: {
        key: "#ff9f7d",
        alt: "#896883",
        dark: "#2e2e47",
        reverse: false,
      },
      images: {
        location: "gallery",
        entries: ["vie__web-Banner.jpg"],
      },
    },
    {
      name: "Gigaslayer",
      type: "Game",
      section: ["Game", "WIP"],
      featured: false,
      repo: {
        platform: "PC",
        link: "",
      },
      description: (
        <>
          A classic JRPG-style video game about a young boy named Adam who
          ventures off to hunt down <i>Gigas</i> and their troublesome spawn
          that have run rampant since their recent reawakening.
        </>
      ),
      meta: {
        developer: "Crymsica",
        publisher: "EPOCH Studios",
        genre: ["JRPG", "RPG", "Fantasy"],
      },
      tech: ["RPG Maker MZ", "Javascript"],
      link: "",
      icon: "",
      colors: {
        key: "",
        alt: "",
        dark: "",
        reverse: false,
      },
      images: {
        location: "gallery",
        entries: [],
      },
    },
    {
      name: "Andromata",
      type: "Story",
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
      images: {
        location: "gallery",
        entries: [],
      },
    },

    {
      name: "Convergence",
      type: "Game",
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
      images: {
        location: "gallery",
        entries: [],
      },
    },
    {
      name: "Crymsica",
      type: "Brand",
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
      images: {
        location: "projects",
        entries: [],
      },
    },
    {
      name: "T2 Com-bat",
      type: "Brand",
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
      images: {
        location: "gallery",
        entries: ["t2__web.jpg", "t2-patch__web.jpg"],
      },
    },
    {
      name: (
        <>
          War Love<span className="subtitle">by Jessica L?? Rel</span>
        </>
      ),
      type: "Album Cover",
      section: ["Artist"],
      featured: true,
      repo: {
        platform: "",
        link: "",
      },
      description: (
        <>
          The cover art for R&B/Soul artist Jessica L??&nbsp;Rel's debut album,{" "}
          <i>War&nbsp;Love </i>.
        </>
      ),
      meta: {
        client: "Jessica Anderson (aka Jessica L?? Rel)",
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
      images: {
        location: "gallery",
        entries: ["war-love__web.jpg"],
      },
    },
  ],
  experience: [
    {
      type: "personal",
      org: {
        name: "EPOCH Studios",
        address: {
          streetNumber: 2645,
          streetName: "Rosalyn Lane",
          streetOther: "",
          streetOtherType: "",
          city: "Smyrna",
          state: "Georgia",
          stateInitials: "GA",
          zipCode: "30080-1811",
        },
      },
      current: true,
      startDate: {
        month: "March",
        day: 1,
        year: 2016,
      },
      endDate: {
        month: "",
        day: 1,
        year: 2020,
      },
      roles: [
        {
          name: "Chief Editor",
          description:
            "Designed and created company to express the creative ideas of myself and other artists and authors.",
          tasks: [
            "Authored and published Arcan: The Missing Nexus novel",
            "Designed and developed company website (wireframe, layout, structure) for various platforms (desktop, mobile, tablet)",
            "Designed company brands and sub-brands, logos, wordmarks, icons, color palette, and other graphics",
            "Manage merchandise/product inventory, Product development and marketing",
            "Order fulfillment; packaging and shipping",
            "Proofreading, editing (copyediting, line editing) prior to publication]",
          ],
          skills: ["Proofreading", "copyediting", "branding"],
        },
      ],
    },
    {
      type: "professional",
      org: {
        name: "Epiq",
        address: {
          streetNumber: 2,
          streetName: "Ravinia Drive",
          streetOther: "",
          streetOtherType: "Suite",
          city: "Atlanta",
          state: "Georgia",
          stateInitials: "GA",
          zipCode: "30346-2104",
        },
      },
      current: false,
      startDate: {
        month: "October",
        day: 22,
        year: 2018,
      },
      endDate: {
        month: "March",
        day: 19,
        year: 2021,
      },
      roles: [
        {
          name: "Workflow Coordinator",
          description:
            "Management of workflow and delegation of work requests in a high-volume, fast-paced environment",
          tasks: [
            "Corresponded with clients to assess requirements and establish deadlines for work requests",
            "Managed queue of work request tickets, prioritizing and delegating tasks to operators",
          ],
          skills: ["time management"],
        },
        {
          name: "Document Specialist",
          description:
            "Prepared and converted official documentation for legal firms/law offices.",
          tasks: [
            "Converted various poor-quality/resolution documents (scans, sketches, etc.) into editable, dynamic documents utilizing various Microsoft Office tools and plugins",
            "Peer reviewed work request documents for quality assurance prior to delivery to the client",
            "Troubleshooted errors with ???broken??? documents, providing client with instructions remotely",
            "Maintained document organization and versioning via iManage document management system",
          ],
          skills: ["quality assurance"],
        },
      ],
    },
    {
      type: "professional",
      org: {
        name: "Lockheed Martin",
        address: {
          streetNumber: 0,
          streetName: "",
          streetOther: "",
          streetOtherType: "",
          city: "Hurlburt Field",
          state: "Florida",
          stateInitials: "GA",
          zipCode: "",
        },
      },
      current: false,
      startDate: {
        month: "October",
        day: 1,
        year: 2016,
      },
      endDate: {
        month: "March",
        day: 1,
        year: 2018,
      },
      roles: [
        {
          name: "Word Processor III",
          description:
            "Performed all tasks pertaining to maintenance computing and documentation in support of Air Force Isochronal inspections.",
          tasks: [
            "Computed all aircraft discrepancy documentation for Air Force transient aircraft",
            "Created and scheduled tasks for aircraft maintenance and inspections",
            "Prepared 600 - page transcripts of Isochronal inspection for Air Force transient aircraft",
          ],
          skills: ["time management"],
        },
      ],
    },
    {
      type: "professional",
      org: {
        name: "U.S. Air Force Reserve",
        address: {
          streetNumber: 0,
          streetName: "",
          streetOther: "",
          streetOtherType: "",
          city: "Marietta",
          state: "Georgia",
          stateInitials: "GA",
          zipCode: "",
        },
      },
      current: false,
      startDate: {
        month: "August",
        day: 29,
        year: 2016,
      },
      endDate: {
        month: "September",
        day: 1,
        year: 2020,
      },
      roles: [
        {
          name: "Aerospace Maintenance Journeyman (Crew Chief)",
          description:
            "Performed the duties of Crew Chief in support of the C-130 cargo aircraft.",
          tasks: [
            "Ensured aircraft fleet was fully mission capable (FMC) for real world and training missions",
            "Responsible for maintaining documentation of aircraft discrepancies",
            "Managed specialist personnel and ensured their participation in restoring aircraft to FMC status",
          ],
          skills: ["time management"],
        },
      ],
    },
    {
      type: "professional",
      org: {
        name: "U.S. Air Force",
        address: {
          streetNumber: 0,
          streetName: "",
          streetOther: "",
          streetOtherType: "",
          city: "Hurlburt Field",
          state: "Florida",
          stateInitials: "FL",
          zipCode: "",
        },
      },
      current: false,
      startDate: {
        month: "August",
        day: 29,
        year: 2010,
      },
      endDate: {
        month: "August",
        day: 29,
        year: 2016,
      },
      roles: [
        {
          name: "Aerospace Maintenance Journeyman (Crew Chief)",
          description:
            "Performed the duties of Crew Chief in support of the MC-130H Special Operations cargo aircraft.",
          tasks: [
            "Ensured aircraft fleet was fully mission capable (FMC) for real world and training missions",
            "Responsible for maintaining documentation of aircraft discrepancies",
            "Managed specialist personnel and ensured their participation in restoring aircraft to FMC status",
          ],
          skills: ["time management"],
        },
      ],
    },
  ],
  education: [
    {
      type: "degree",
      org: {
        name: "Kennesaw State University",
        address: {
          streetNumber: 1000,
          streetName: "Chastain Rd NW",
          streetOther: "",
          streetOtherType: "",
          city: "Kennesaw",
          state: "Georgia",
          stateInitials: "GA",
          zipCode: "30144-5591",
        },
        contact: {
          phone: 4705786000,
          email: "",
        },
      },
      current: true,
      conferral: false,
      startDate: {
        month: "June",
        day: 1,
        year: 2022,
      },
      endDate: {
        month: "",
        day: 1,
        year: 2022,
      },
      majors: [
        {
          name: "Computer Game Design & Development",
          degreeLevel: "undergraduate",
          degreeType: "Bachelor of Science",
          field: "Computer Science",
          tags: ["game design", "game development", "computer science", "tech"],
        },
      ],
      minors: [],
      other: [],
      notes: [
        "Transferred to school that provides more technical/development courses",
      ],
    },
    {
      type: "bootcamp",
      org: {
        name: "Per Scholas",
        address: {
          streetNumber: 0,
          streetName: "",
          streetOther: "",
          streetOtherType: "",
          city: "Atlanta",
          state: "Georgia",
          stateInitials: "",
          zipCode: "",
        },
        contact: {
          phone: 0,
          email: "",
        },
      },
      current: false,
      conferral: true,
      startDate: {
        month: "May",
        day: 23,
        year: 2022,
      },
      endDate: {
        month: "September",
        day: 2,
        year: 2022,
      },
      majors: [],
      minors: [],
      other: [
        {
          name: "Software Engineering Bootcamp",
          conferralType: "certificate",
          field: "Software Engineering",
          tags: ["computer science", "tech", "web development"],
        },
      ],
      notes: [
        "Acquired hands-on experience with MERN full stack development, demonstrating high proficiencies in JavaScript, React, Node.js, and practical experience in database technologies including MongoDB and MySQL",
        "Bridged the gap in understanding of end-to-end development process and solidified abilities to deploy full stack applications in an agile team environment",
      ],
    },
    {
      type: "degree",
      org: {
        name: "The Art Institute of Atlanta",
        address: {
          streetNumber: 1,
          streetName: "",
          streetOther: "",
          streetOtherType: "",
          city: "Atlanta",
          state: "Georgia",
          stateInitials: "GA",
          zipCode: "",
        },
        contact: {
          phone: 0,
          email: "",
        },
      },
      current: false,
      conferral: false,
      startDate: {
        month: "March",
        day: 1,
        year: 2018,
      },
      endDate: {
        month: "June",
        day: 1,
        year: 2021,
      },
      majors: [
        {
          name: "Media Art & Animation",
          degreeLevel: "undergraduate",
          degreeType: "Bachelor of Fine Arts",
          field: "Computer Animation",
          tags: [],
        },
      ],
      minors: [],
      other: [],
      notes: [],
    },
  ],
  skills: [
    {
      name: "HTML",
      category: ["developer", "game", "artist"],
      type: "language",
      primary: false,
    },
    {
      name: "CSS",
      category: ["developer", "game", "artist"],
      type: "language",
      primary: false,
    },
    {
      name: "Javascript",
      category: ["developer", "game", "artist"],
      type: "language",
      primary: false,
    },
    {
      name: "React",
      category: ["developer", "game"],
      type: "language",
      primary: true,
    },
    {
      name: "Node.js",
      category: ["developer", "game"],
      type: "language",
      primary: true,
    },
    {
      name: "Express.js",
      category: ["developer"],
      type: "language",
      primary: false,
    },
    {
      name: "C#",
      category: ["developer", "game"],
      type: "language",
      primary: true,
    },
    {
      name: "Unity",
      category: ["game"],
      type: "tool",
      primary: true,
    },
    {
      name: "MongoDB",
      category: ["developer"],
      type: "language",
      primary: true,
    },
    {
      name: "SQL",
      category: ["developer", "game"],
      type: "language",
      primary: false,
    },
    {
      name: "NoSQL",
      category: ["developer", "game"],
      type: "language",
      primary: false,
    },
    { name: "MySQL", category: ["developer"], type: "language", primary: true },
    {
      name: "MongoDB Compass",
      category: ["developer"],
      type: "tool",
      primary: false,
    },
    {
      name: "MongoDB Atlas",
      category: ["developer"],
      type: "tool",
      primary: false,
    },
    {
      name: "Mongoose",
      category: ["developer"],
      type: "language",
      primary: false,
    },
    {
      name: "Mongo Shell",
      category: ["developer"],
      type: "tool",
      primary: false,
    },
    {
      name: "MySQL Workbench",
      category: ["developer"],
      type: "tool",
      primary: false,
    },
    {
      name: "Postman",
      category: ["developer", "game"],
      type: "tool",
      primary: true,
    },
    {
      name: "Git",
      category: ["developer", "game"],
      type: "tool",
      primary: true,
    },
    {
      name: "GitHub",
      category: ["developer", "game"],
      type: "tool",
      primary: true,
    },
    {
      name: "NPM",
      category: ["developer", "game"],
      type: "proficiency",
      primary: true,
    },
    {
      name: "Squarespace",
      category: ["developer", "writer"],
      type: "tool",
      primary: true,
    },
    {
      name: "Adobe Creative Cloud",
      category: ["artist"],
      type: "tool",
      primary: true,
    },
    {
      name: "Photoshop",
      category: ["artist"],
      type: "tool",
      primary: true,
    },
    {
      name: "Illustrator",
      category: ["artist"],
      type: "tool",
      primary: true,
    },
    {
      name: "InDesign",
      category: ["artist", "writer"],
      type: "tool",
      primary: true,
    },
    {
      name: "Acrobat",
      category: ["writer", "general"],
      type: "tool",
      primary: false,
    },
    {
      name: "Adobe Bridge",
      category: ["artist", "general"],
      type: "tool",
      primary: false,
    },
    {
      name: "Adobe XD",
      category: ["artist", "game", "developer"],
      type: "tool",
      primary: false,
    },
    {
      name: "Figma",
      category: ["developer", "artist"],
      type: "tool",
      primary: false,
    },
    {
      name: "FontMaker",
      category: ["developer", "artist", "general"],
      type: "tool",
      primary: false,
    },
    {
      name: "Microsoft Word",
      category: ["general", "writer"],
      type: "tool",
      primary: false,
    },
    {
      name: "Microsoft Excel",
      category: ["general"],
      type: "tool",
      primary: false,
    },
    { name: "PowerPoint", category: ["general"], type: "tool", primary: false },
    {
      name: "Microsoft Outlook",
      category: ["general"],
      type: "tool",
      primary: false,
    },
    {
      name: "Microsoft Teams",
      category: ["general"],
      type: "tool",
      primary: false,
    },
    {
      name: "Visual Studio Code",
      category: ["developer", "game"],
      type: "tool",
      primary: false,
    },
    {
      name: "Autodesk Maya",
      category: ["artist", "game"],
      type: "tool",
      primary: false,
    },
    {
      name: "ZBrush",
      category: ["artist", "game"],
      type: "tool",
      primary: true,
    },
    {
      name: "Adobe Substance Painter",
      category: ["artist", "game"],
      type: "",
      primary: false,
    },
    {
      name: "MERN",
      category: ["developer"],
      type: "proficiency",
      primary: false,
    },
    {
      name: "Version Control",
      category: ["developer", "game"],
      type: "proficiency",
      primary: false,
    },
    {
      name: "REST",
      category: ["developer"],
      type: "proficiency",
      primary: false,
    },
    {
      name: "RESTful",
      category: ["developer"],
      type: "proficiency",
      primary: false,
    },
    {
      name: "API Design/Development",
      category: ["developer"],
      type: "proficiency",
      primary: false,
    },
    {
      name: "Relational Database Design/Development",
      category: ["developer", "game"],
      type: "proficiency",
      primary: false,
    },
    {
      name: "User Interface Design",
      category: ["developer", "game"],
      type: "proficiency",
      primary: false,
    },
    {
      name: "User Experience Design",
      category: ["developer", "game"],
      type: "proficiency",
      primary: false,
    },
    {
      name: "Graphic Design",
      category: ["artist", "game"],
      type: "proficiency",
      primary: false,
    },
    {
      name: "3D Modeling",
      category: ["artist", "game"],
      type: "proficiency",
      primary: false,
    },
    {
      name: "Digital Illustration",
      category: ["artist", "game"],
      type: "proficiency",
      primary: false,
    },
    {
      name: "Windows",
      category: ["developer", "general"],
      type: "operating system",
      primary: false,
    },
    {
      name: "Mac",
      category: ["developer", "general"],
      type: "operating system",
      primary: false,
    },
    {
      name: "Linux",
      category: ["developer"],
      type: "operating system",
      primary: false,
    },
    {
      name: "LESS",
      category: ["developer"],
      type: "language",
      primary: true,
    },
    { name: "SASS", category: ["developer"], type: "language", primary: true },
    {
      name: "jQuery",
      category: ["developer"],
      type: "language",
      primary: false,
    },
  ],
  associations: [],
};

export const wrapSkills = skills =>
  skills.map(skill => resumeData.skills.find(entry => entry.name === skill));
