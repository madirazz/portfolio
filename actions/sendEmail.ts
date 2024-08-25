"use server";

import React from "react";
import { Resend } from "resend";
import { validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "razie.ahmadi93@gmail.com",
    subject: "Message from contact form",
    reply_to: senderEmail as string,
    text: message as string,
  });
};
