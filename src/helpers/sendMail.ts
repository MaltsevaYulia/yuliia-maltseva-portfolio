"use server";
import nodemailer from "nodemailer";

import { config } from "dotenv";

config();

export interface IProps {
  to: string;
  name: string;
  subject: string;
  body: string;
}

const sendMail = async ({ to, name, subject, body }: IProps) => {
  const { NEXT_PUBLIC_ADMIN_EMAIL, NEXT_PUBLIC_ADMIN_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    // service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: NEXT_PUBLIC_ADMIN_EMAIL,
      pass: NEXT_PUBLIC_ADMIN_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log("🚀 ~ sendMail ~ testResult:", testResult);
  } catch (error) {
    console.log("🚀 ~ sendMail ~ verifyError:", error);
  }
  try {
    const sendResult = await transport.sendMail({
      from: NEXT_PUBLIC_ADMIN_EMAIL,
      to,
      subject,
      html: body,
    });
    console.log(sendResult);
  } catch (error) {
    console.log("🚀 ~ sendMail ~ error:", error);
  }
};

export default sendMail;
