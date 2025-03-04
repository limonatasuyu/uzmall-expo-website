
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, email, phone, purpose, message, _subject } = await request.json();
  const { AMOCRM_DOMAIN, AMOCRM_ACCESS_TOKEN } = process.env;

  if (!AMOCRM_DOMAIN || !AMOCRM_ACCESS_TOKEN) {
    return NextResponse.json(
      { success: false, message: "Missing AmoCRM credentials" },
      { status: 500 }
    );
  }

  const leadData = {
    name,
    custom_fields_values: [
      { field_id: 673759, values: [{ value: email }] }, // from
      { field_id: 673735, values: [{ value: message }] }, // utm_content
      { field_id: 673739, values: [{ value: purpose }] }, // utm_campaign
      { field_id: 673743, values: [{ value: _subject }] }, // utm_term
      { field_id: 673741, values: [{ value: phone }] }, // utm_source
    ],
  };

  const leadResponse = await fetch(`https://${AMOCRM_DOMAIN}/api/v4/leads`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AMOCRM_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([leadData]),
  });

  if (!leadResponse.ok) {
    const errorData = await leadResponse.json();
    return NextResponse.json(
      { success: false, message: "Failed to create lead", error: errorData },
      { status: 500 }
    );
  }

  const leadResponseData = await leadResponse.json();
  const leadId = leadResponseData?._embedded?.leads?.[0]?.id;
  if (!leadId) {
    return NextResponse.json(
      { success: false, message: "Lead ID not found" },
      { status: 500 }
    );
  }

  const contactsResponse = await fetch(`https://${AMOCRM_DOMAIN}/api/v4/contacts`, {
    headers: { Authorization: `Bearer ${AMOCRM_ACCESS_TOKEN}` },
  });

  if (!contactsResponse.ok) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch contacts" },
      { status: 500 }
    );
  }

  const contactsData = await contactsResponse.json();
  const contacts = contactsData?._embedded?.contacts || [];

  const contact = contacts.find((c: { custom_fields_values?: { field_code?: string; field_name?: string; values?: { value?: string }[] }[] }) =>
    c.custom_fields_values?.some((field) =>
      (field.field_code === "EMAIL" || field.field_name?.toUpperCase().includes("EMAIL")) &&
      field.values?.some((valueObj: { value?: string }) => valueObj.value?.toLowerCase() === email.toLowerCase())
    )
  );

  if (contact) {
    const updateContactResponse = await fetch(`https://${AMOCRM_DOMAIN}/api/v4/contacts`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${AMOCRM_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ id: contact.id, _embedded: { leads: [{ id: leadId }] } }]),
    });

    if (!updateContactResponse.ok) {
      const errorData = await updateContactResponse.json();
      return NextResponse.json(
        { success: false, message: "Failed to update contact with lead", error: errorData },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Lead created and linked to existing contact",
      leadId,
      contactId: contact.id,
    });
  }

  const contactData = {
    name,
    custom_fields_values: [
      { field_code: "EMAIL", values: [{ value: email, enum_code: "WORK" }] },
      { field_code: "PHONE", values: [{ value: phone, enum_code: "WORK" }] },
    ],
    _embedded: { leads: [{ id: leadId }] },
  };

  const createContactResponse = await fetch(`https://${AMOCRM_DOMAIN}/api/v4/contacts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AMOCRM_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([contactData]),
  });

  if (!createContactResponse.ok) {
    const errorData = await createContactResponse.json();
    return NextResponse.json(
      { success: false, message: "Failed to create contact", error: errorData },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Lead created and new contact added",
    leadId,
  });
}
