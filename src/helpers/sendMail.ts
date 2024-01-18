import nodemailer from "nodemailer";
import { GiMailShirt } from "react-icons/gi";

const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

interface IProps {
  to: string;
  name: string;
  subject: string;
  body: string;
}

const sendMail = async ({ to,name, subject, body }: IProps) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
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
      from: SMTP_EMAIL,
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
