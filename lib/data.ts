import React from "react";
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
    title: "Software Quality Assurance Engineer",
    location: "Five Elements Labs",
    description:
      "I led test automation initiatives by implementing Rainforest QA, achieving 30% faster testing cycles and a 20% reduction in post-release defects, designed and executed comprehensive automated test suites for web and mobile applications to expand test coverage by 50% and enhance product quality, and optimized testing processes through root cause analysis, Agile/Scrum collaboration, and continuous improvement.",
    icon: React.createElement(LuGraduationCap),
    date: "Mar 2023 - Sep 2023",
  },
  {
    title: "Back End Developer",
    location: "Workinvoice",
    description:
      "I developed and optimized server-side pagination for RESTful APIs in Clojure, using Multimethods/Hierarchies to reduce client-side load times by 90%, enhanced API performance with caching strategies and database query tuning, collaborated with front-end developers for seamless integration and data exchange, and wrote comprehensive unit and integration tests to ensure code quality and reliability.",
    icon: React.createElement(LuGraduationCap),
    date: "Apr 2022 - Mar 2023",
  },
  {
    title: "Embedded Software Engineer",
    location: "FiberHome",
    description:
      "I developed and debugged control plane software using C and C++, focusing on optimizing functionality and system performance, specializing in advanced optical control plane modules like TNE, CSPF, OSPF, MPLS, and I3 to improve network efficiency and scalability, and designed test cases and procedures to enhance the reliability and performance of embedded system components.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2017 - Jan 2020",
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
