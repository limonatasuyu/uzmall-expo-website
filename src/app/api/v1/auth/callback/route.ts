import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Authorization code not found" }, { status: 400 });
  }

  const client_id = process.env.AMOCRM_CLIENT_ID;
  const client_secret = process.env.AMOCRM_CLIENT_SECRET;
  const redirect_uri = `https://${process.env.AMOCRM_DOMAIN}/api/v1/auth/callback`;

  const tokenResponse = await fetch(`https://${process.env.AMOCRM_DOMAIN}/oauth2/access_token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id,
      client_secret,
      grant_type: "authorization_code",
      code,
      redirect_uri,
    }),
  });

  const tokenData = await tokenResponse.json();

  console.log("tokenData: ", JSON.stringify(tokenData));

  if (tokenData.error) {
    return NextResponse.json({ error: tokenData.error }, { status: 400 });
  }

  // Store tokens securely, e.g., in a database or encrypted cookies
  // tokenData.access_token
  // tokenData.refresh_token

  return NextResponse.redirect("/");
}
