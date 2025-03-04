
import { NextResponse } from "next/server";


export async function POST(request: Request) {
  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;
  try {
    const body = await request.json();
    const { name, mail, phone, purpose, message, _subject } = body;

    if (!name || !mail || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const telegramMessage = `
      New Contact Form Submission:
      ---------------------------
      Name: ${name}
      Email: ${mail}
      Phone: ${phone}
      Purpose: ${purpose}
      Message: ${message}
      Subject: ${_subject}
    `;

    const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
      }),
    });

    if (!telegramResponse.ok) {
      console.error("Response status:", telegramResponse.status);
      const responseBody = await telegramResponse.text();
      console.error("Response body:", responseBody);
      throw new Error("Failed to send Telegram message");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}