import sendMail, { IProps } from "@/helpers/sendMail";
import { NextResponse } from "next/server";

export async function POST(req: {
  json: () => Promise<IProps>;
}): Promise<NextResponse> {
  try {
    const data = await req.json();
    console.log("🚀 ~ POST ~ data:", data);
    const { name, subject, body } = data;
    sendMail({
      to: "muscoprof@gmail.com",
      name,
      subject,
      body,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: err.status });
  }
}
