import { NextResponse } from "next/server";

export async function GET() {
  const { AMOCRM_CLIENT_ID, AMOCRM_DOMAIN, APP_DOMAIN } = process.env;
  const authUrl = `https://${AMOCRM_DOMAIN}/oauth?client_id=${AMOCRM_CLIENT_ID}&redirect_uri=${APP_DOMAIN}/api/v1/auth/callback&response_type=code`;
  return NextResponse.redirect(authUrl);
}
