"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My journey into the world of technology began with a fascination for the
        software behind telecommunication systems, which led me to transition
        from telecommunication engineering to software development. After
        graduating with a master degree in{" "}
        <span className="font-medium">telecommunication engineering</span> in
        Milan, I decided to pursue my passion for programming. Driven by a love
        for problem-solving and{" "}
        <span className="font-medium">continuous learning</span>, I recently
        completed an intensive bootcamp at BrainStation, focusing on web
        development. Armed with skills in HTML, CSS, JavaScript, and modern
        frameworks, I am excited to continue my journey in the ever-evolving
        tech landscape, always with a bit of humor and a smile! :D
      </p>
    </motion.section>
  );
}
