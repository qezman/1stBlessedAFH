import { NextResponse } from "next/server";
import {
  createContactEmail,
  parseContactRequest,
  type ContactRequest,
} from "../../../lib/contact";

const DELIVERY_ERROR =
  "Unable to send your message right now. Please try again shortly.";

export async function POST(request: Request) {
  // These stay on the server so the Resend key never reaches the browser.
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error(
      "Contact form email environment variables are not configured.",
    );
    return NextResponse.json(
      {
        error:
          "The contact form is temporarily unavailable. Please call us directly.",
      },
      { status: 503 },
    );
  }

  let body: ContactRequest;
  try {
    body = (await request.json()) as ContactRequest;
  } catch {
    return NextResponse.json(
      { error: "Please submit the form again." },
      { status: 400 },
    );
  }

  const details = parseContactRequest(body);

  if (!details) {
    return NextResponse.json(
      {
        error:
          "Please complete all required fields with a valid email address.",
      },
      { status: 400 },
    );
  }

  const email = createContactEmail(details);

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: details.email,
        ...email,
      }),
    });

    if (!resendResponse.ok) {
      console.error(
        "Resend rejected contact email:",
        await resendResponse.text(),
      );
      return NextResponse.json(
        {
          error: DELIVERY_ERROR,
        },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Contact email delivery failed:", error);
    return NextResponse.json(
      {
        error: DELIVERY_ERROR,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
