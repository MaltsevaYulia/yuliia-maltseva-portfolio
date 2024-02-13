import { Request } from "express";
import { NextResponse } from "next/server";
import sendMail, { IProps } from "@/helpers/sendMail";

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const data = await req.json();
    console.log("🚀 ~ POST ~ data:", data);
    const { name, subject, body } = data  as IProps;
    const info = await sendMail({
      to: "muscoprof@gmail.com",
      name,
      subject,
      body,
    });

    return NextResponse.json({ success: true, info });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: err.status });
  }
}
