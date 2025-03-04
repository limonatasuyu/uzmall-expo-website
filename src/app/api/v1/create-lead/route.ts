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

  // Field IDs for tracking data
  const contentId = 673735;
  const sourceId = 673741;
  const campaignId = 673739;
  const termId = 673743;
  const fromId = 673759;

  // Create a new lead with custom fields
  const leadData = {
    name,
    custom_fields_values: [
      { field_id: fromId, values: [{ value: email }] },
      { field_id: contentId, values: [{ value: message }] },
      { field_id: campaignId, values: [{ value: purpose }] },
      { field_id: termId, values: [{ value: _subject }] },
      { field_id: sourceId, values: [{ value: phone }] },
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

  // Get all contacts from amoCRM
  const contactsResponse = await fetch(`https://${AMOCRM_DOMAIN}/api/v4/contacts`, {
    headers: { Authorization: `Bearer ${AMOCRM_ACCESS_TOKEN}` },
  });

  let contactId: number | null = null;
  if (contactsResponse.ok) {
    const contactsData = await contactsResponse.json();
    const contacts = contactsData?._embedded?.contacts || [];
    // Filter the contacts to find one with an EMAIL custom field matching the provided email
    for (const contact of contacts) {
      if (contact.custom_fields_values) {
        for (const field of contact.custom_fields_values) {
          // Check if this is the EMAIL field
          if (field.field_code === "EMAIL" || (field.field_name?.toUpperCase().includes("EMAIL"))) {
            for (const valueObj of field.values) {
              if (valueObj.value.toLowerCase() === email.toLowerCase()) {
                contactId = contact.id;
                break;
              }
            }
          }
          if (contactId) break;
        }
      }
      if (contactId) break;
    }
  } else {
    return NextResponse.json(
      { success: false, message: "Failed to fetch contacts" },
      { status: 500 }
    );
  }

  if (contactId) {
    // Update the existing contact to embed (link) the new lead
    const updateContactResponse = await fetch(`https://${AMOCRM_DOMAIN}/api/v4/contacts`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${AMOCRM_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ id: contactId, _embedded: { leads: [{ id: leadId }] } }]),
    });
    if (!updateContactResponse.ok) {
      const errorData = await updateContactResponse.json();
      return NextResponse.json(
        { success: false, message: "Failed to update contact with lead", error: errorData },
        { status: 500 }
      );
    }
  } else {
    // Create a new contact with the new lead embedded
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
  }

  return NextResponse.json({
    success: true,
    message: "Lead and Contact processed successfully",
    leadId,
    contactId,
  });
}
