export const education = [
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
    current: false,
    conferral: false,
    startDate: {
      month: "June",
      day: 1,
      year: 2022,
    },
    endDate: {
      month: "December",
      day: 16,
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
    // majors: [],
    // minors: [],
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
];
