import React from "react";
import SectionHeading from "./section-heading";

export default function Contact() {
  return (
    <section id="contact">
      <SectionHeading>Contact me</SectionHeading>
      <p>
        Please contact me directly at my{" "}
        <a className="underline" href="mailto:razie.ahmadi93@gmail.com">
          mail
        </a>{" "}
        or through this form
      </p>
    </section>
  );
}
