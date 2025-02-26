import { NextResponse, type NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { name, email, phone, purpose, message, _subject } = await request.json();

  // Retrieve the stored access token
  const access_token = process.env.AMOCRM_ACCESS_TOKEN;

  const leadData = {
    name,
    custom_fields_values: [
      {
        field_code: 'EMAIL',
        values: [{ value: email }],
      },
      {
        field_code: 'PHONE',
        values: [{ value: phone }],
      },
      {
        field_code: 'PURPOSE',
        values: [{ value: purpose }],
      },
      {
        field_code: 'MESSAGE',
        values: [{ value: message }],
      },
      {
        field_code: 'SUBJECT',
        values: [{ value: _subject }],
      },
    ],
  };

  const response = await fetch("https://uzmallexpo.amocrm.ru/api/v4/leads", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([leadData]),
  });

  if (!response.ok) {
    const errorData = await response.json();
    return NextResponse.json({ error: errorData }, { status: response.status });
  }

  const responseData = await response.json();
  return NextResponse.json({ success: true, data: responseData });
}
