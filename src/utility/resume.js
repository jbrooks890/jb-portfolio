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
    secondary: "jbrooks@worldsofepoch.com",
    other: ["jbrooks890@icloud.com"],
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
      repo: {
        platform: "Github",
        link: "https://github.com/jbrooks890/Poke-Squad",
      },
      description:
        "A companion app that queries the RESTful PokéAPI, enabling users to build their custom Pokémon teams for use with popular Pokémon games by Nintendo.",
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
      repo: {
        platform: "",
        link: "",
      },
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
      repo: {
        platform: "",
        link: "",
      },
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
            "Troubleshooted errors with “broken” documents, providing client with instructions remotely",
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
    { name: "HTML", category: ["developer"], type: "language", primary: false },
    { name: "CSS", category: ["developer"], type: "language", primary: false },
    {
      name: "Javascript",
      category: ["developer"],
      type: "language",
      primary: false,
    },
    { name: "React", category: ["developer"], type: "language", primary: true },
    {
      name: "Node.js",
      category: ["developer"],
      type: "language",
      primary: true,
    },
    {
      name: "Express.js",
      category: ["developer"],
      type: "language",
      primary: false,
    },
    { name: "C#", category: ["developer"], type: "language", primary: false },
    {
      name: "MongoDB",
      category: ["developer"],
      type: "language",
      primary: true,
    },
    { name: "SQL", category: ["developer"], type: "language", primary: false },
    {
      name: "NoSQL",
      category: ["developer"],
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
    { name: "Postman", category: ["developer"], type: "tool", primary: true },
    { name: "Git", category: ["developer"], type: "tool", primary: true },
    { name: "GitHub", category: ["developer"], type: "tool", primary: true },
    {
      name: "Squarespace",
      category: ["developer"],
      type: "tool",
      primary: true,
    },
    {
      name: "Adobe Photoshop",
      category: ["artist"],
      type: "tool",
      primary: false,
    },
    {
      name: "Adobe Illustrator",
      category: ["artist"],
      type: "tool",
      primary: false,
    },
    {
      name: "Adobe InDesign",
      category: ["artist"],
      type: "tool",
      primary: false,
    },
    {
      name: "Adobe Acrobat",
      category: ["general"],
      type: "tool",
      primary: false,
    },
    {
      name: "Adobe Bridge",
      category: ["artist"],
      type: "tool",
      primary: false,
    },
    { name: "Adobe XD", category: ["artist"], type: "tool", primary: false },
    {
      name: "Figma",
      category: ["developer", "artist"],
      type: "tool",
      primary: false,
    },
    {
      name: "Microsoft Word",
      category: ["general"],
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
      category: ["developer"],
      type: "tool",
      primary: false,
    },
    {
      name: "Autodesk Maya",
      category: ["artist"],
      type: "tool",
      primary: false,
    },
    { name: "ZBrush", category: ["artist"], type: "tool", primary: false },
    {
      name: "Adobe Substance Painter",
      category: ["artist"],
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
      category: ["developer"],
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
      name: "Database Design/Development",
      category: ["developer"],
      type: "proficiency",
      primary: false,
    },
    {
      name: "User Interface Design",
      category: ["developer"],
      type: "proficiency",
      primary: false,
    },
    {
      name: "User Experience Design",
      category: ["developer"],
      type: "proficiency",
      primary: false,
    },
    {
      name: "Graphic Design",
      category: ["artist"],
      type: "proficiency",
      primary: false,
    },
    {
      name: "3D Modeling",
      category: ["artist"],
      type: "proficiency",
      primary: false,
    },
    {
      name: "Digital Illustration",
      category: ["artist"],
      type: "proficiency",
      primary: false,
    },
    {
      name: "Windows",
      category: ["developer"],
      type: "operating system",
      primary: false,
    },
    {
      name: "Mac",
      category: ["developer"],
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
    {
      name: "NPM",
      category: ["developer"],
      type: "proficiency",
      primary: true,
    },
    {
      name: "FontMaker",
      category: ["developer", "artist"],
      type: "tool",
      primary: false,
    },
  ],
  associations: [],
};

export const wrapSkills = skills =>
  skills.map(skill => resumeData.skills.find(entry => entry.name === skill));