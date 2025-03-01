import { NextResponse } from "next/server";

export async function GET() {
  const { AMOCRM_CLIENT_ID, AMOCRM_REDIRECT_URI } = process.env;
  const authUrl = `https://infouzmallexpouz.amocrm.ru/oauth?client_id=${AMOCRM_CLIENT_ID}&redirect_uri=${AMOCRM_REDIRECT_URI}&response_type=code`;
  return NextResponse.redirect(authUrl);
}
