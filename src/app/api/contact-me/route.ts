import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const data = await req.json();
      
    const { NEXT_PUBLIC_WEB3FORM_ACCESS_KEY } = process.env;
    
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    
    if (NEXT_PUBLIC_WEB3FORM_ACCESS_KEY) {
      formData.append("access_key", NEXT_PUBLIC_WEB3FORM_ACCESS_KEY);
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    return NextResponse.json({ success: true, response });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: err.status });
  }
}
