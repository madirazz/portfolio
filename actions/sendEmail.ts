"use server";

import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log(formData.get("senderEmail"));
  console.log(formData.get("message"));

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "razie.ahmadi93@gmail.com",
    subject: "Message from contact form",
    text: "hello from the other side",
  });
};
