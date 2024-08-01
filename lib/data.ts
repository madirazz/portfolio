import { LuGraduationCap } from "react-icons/lu";
import bandsite from "@/public/bandsite.png";
import skinventory from "@/public/skinventory.png";
import brainflix from "@/public/brainflix.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Vancouver, BC",
    description:
      "I graduated from BrainStation",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
] as const;

export const projectsData = [
  {
    title: "Skinventory",
    description:
      "Skinventory is a project designed to help users manage their skincare products. The primary focus of project is to provide a streamlined, user-friendly interface for tracking product details. ",
    tags: ["React", "JavaScript", "CSS(Sass)", "Express", "MySQL"],
    imageUrl: skinventory,
  },
  {
    title: "Bandsite",
    description:
      "I worked on this project during BrainStation bootcamp. This project was completed in three sprints (weeks)",
    tags: ["HTML", "CSS(Sass)", "JavaScript", "Axios"],
    imageUrl: bandsite,
  },

  {
    title: "Brainflix",
    description: "A Full-stack React/Express.js video viewing app.",
    tags: ["React", "JavaScript", "CSS(Sass)", "Express"],
    imageUrl: brainflix,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
