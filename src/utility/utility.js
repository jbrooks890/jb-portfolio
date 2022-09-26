function debounce(fn, ms) {
  console.log("Running debounce");
  let timer;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const states = new Map([
  ["Alabama", "AL"],
  ["Alaska", "AK"],
  ["Arizona", "AR"],
  ["Arkansas", "AZ"],
  ["American Samoa", "AS"],
  ["California", "CA"],
  ["Colorado", "CO"],
  ["Connecticut", "CT"],
  ["Delaware", "DE"],
  ["District of Columbia", "DC"],
  ["Florida", "FL"],
  ["Georgia", "GA"],
  ["Guam", "GU"],
  ["Hawaii", "HI"],
  ["Illinois", "IL"],
  ["Indiana", "IN"],
  ["Iowa", "IA"],
  ["Kansas", "KS"],
  ["Kentucky", "KY"],
  ["Louisiana", "LA"],
  ["Maine", "ME"],
  ["Maryland", "MD"],
  ["Massachusetts", "MA"],
  ["Michigan", "MI"],
  ["Minnesota", "MN"],
  ["Mississippi", "MS"],
  ["Missouri", "MO"],
  ["Montana", "MT"],
  ["Nebraska", "NE"],
  ["Nevada", "NV"],
  ["New Hampshire", "NH"],
  ["New Jersey", "NJ"],
  ["New Mexico", "NM"],
  ["New York", "NY"],
  ["North Carolina", "NC"],
  ["North Dakota", "ND"],
  ["Northern Mariana Islands", "CM"],
  ["Ohio", "OH"],
  ["Oklahoma", "OK"],
  ["Oregon", "OR"],
  ["Pennsylvania", "PA"],
  ["Puerto Rico", "PR"],
  ["Rhode Island", "RI"],
  ["South Carolina", "SC"],
  ["Tennessee", "TN"],
  ["Texas", "TX"],
  ["Trust Territories", "TT"],
  ["Utah", "UT"],
  ["Vermont", "VT"],
  ["Virginia", "VA"],
  ["Virgin Islands", "VI"],
  ["Washington", "WA"],
  ["West Virginia", "WV"],
  ["Wisconsin", "WI"],
  ["Wyoming", "WY"],
]);

const skills = [
  {
    name: "HTML",
    type: "computer language",
    subType: "markup",
    group: "",
    abbr: "html",
  },
  {
    name: "CSS",
    type: "computer language",
    subType: "style sheet",
    group: "",
    abbr: "css",
  },
  {
    name: "Javascript",
    type: "computer language",
    subType: "style sheet",
    group: "",
    abbr: "js",
  },
  {
    name: "Node.js",
    type: "runtime environment",
    subType: "",
    group: "Javascript",
    abbr: "",
  },
  {
    name: "Express",
    type: "framework",
    subType: "",
    group: "Node.js",
    abbr: "",
  },
  {
    name: "React",
    type: "library",
    subType: "",
    group: "Javascript",
    abbr: "",
  },
  {
    name: "C#",
    type: "computer language",
    subType: "programming",
    abbr: "",
  },
  {
    name: "MongoDB",
    type: "database program",
    subType: "programming",
    group: "NoSQL",
    abbr: "",
  },
];

export { states, skills, debounce };
