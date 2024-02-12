"use server";
import nodemailer from "nodemailer";

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
// import { OAuth2Client } from "google-auth-library";
//  try {
//    const oAuth2Client = new OAuth2Client(
//      NEXT_PUBLIC_CLIENT_ID,
//      NEXT_PUBLIC_CLIENT_SECRET,
//      NEXT_PUBLIC_REDIRECT_URL
//    );

//    oAuth2Client.setCredentials({
//      refresh_token: NEXT_PUBLIC_REFRESH_TOKEN,
//    });

//    const accessToken = await oAuth2Client.getAccessToken();

//    const transporter = nodemailer.createTransport({
//      service: "gmail",
//      auth: {
//        type: "OAuth2",
//        user: "YOUR_EMAIL@gmail.com",
//        accessToken,
//      },
//    });

//    const mailOptions = {
//      from: NEXT_PUBLIC_ADMIN_EMAIL,
//      to,
//      subject,
//      text: body,
//    };

//    const info = await transporter.sendMail(mailOptions);
//    console.log("Email sent: " + info.response);

//    return info;
//  } catch (error) {
//    console.error(error);
//    throw new Error("Internal Server Error");
//  }
