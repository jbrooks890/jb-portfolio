import { profile } from "../lib/resume/profile";
import { projects } from "../lib/resume/projects";
import { experience } from "../lib/resume/experience";
import { education } from "../lib/resume/education";
import { skills } from "../lib/resume/skills";
import { associations } from "../lib/resume/associations";
import { events } from "../lib/resume/events";

export const resumeData = {
  profile,
  projects,
  experience,
  education,
  skills,
  associations,
  events,
};

export const wrapSkills = skills =>
  skills.map(skill => resumeData.skills.find(entry => entry.name === skill));
