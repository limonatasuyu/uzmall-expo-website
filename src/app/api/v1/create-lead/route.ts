import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, purpose, message, _subject } = await request.json();
    const { AMOCRM_DOMAIN, AMOCRM_ACCESS_TOKEN } = process.env;

    if (!AMOCRM_DOMAIN || !AMOCRM_ACCESS_TOKEN) {
      return NextResponse.json({ success: false, message: "Missing AmoCRM credentials" }, { status: 500 });
    }

    const contentId = 673735;
    const sourceId = 673741;
    const campaignId = 673739;
    const termId = 673743;
    const fromId = 673759;

    // Create a new lead
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

    let leadResponseData: { _embedded?: { leads?: { id?: number }[] } } | undefined;
    try {
      leadResponseData = await leadResponse.json();
    } catch (error) {
      return NextResponse.json(
        { success: false, message: "Invalid response from lead creation" },
        { status: 500 }
      );
    }

    if (!leadResponse.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to create lead", error: leadResponseData },
        { status: 500 }
      );
    }

    const leadId = leadResponseData?._embedded?.leads?.[0]?.id;

    if (!leadId) {
      return NextResponse.json({ success: false, message: "Lead ID not found" }, { status: 500 });
    }

    // Search for an existing contact by email
    const contactSearchResponse = await fetch(`https://${AMOCRM_DOMAIN}/api/v4/contacts?query=${email}`, {
      headers: { Authorization: `Bearer ${AMOCRM_ACCESS_TOKEN}` },
    });

    let searchData: { _embedded?: { contacts?: { id?: number }[] } } | undefined;
    try {
      searchData = await contactSearchResponse.json();
    } catch (error) {
      return NextResponse.json(
        { success: false, message: "Invalid response from contact search" },
        { status: 500 }
      );
    }

    let contactId: number | null = null;
    if (contactSearchResponse.ok) {
      contactId = (searchData)?._embedded?.contacts?.[0]?.id || null;
    }

    if (contactId) {
      // If contact exists, update it to link with the new lead
      await fetch(`https://${AMOCRM_DOMAIN}/api/v4/contacts`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${AMOCRM_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([{ id: contactId, _embedded: { leads: [{ id: leadId }] } }]),
      });
    } else {
      // Create a new contact and link it to the lead
      const contactData = {
        name,
        custom_fields_values: [
          { field_code: "EMAIL", values: [{ value: email, enum_code: "WORK" }] },
          { field_code: "PHONE", values: [{ value: phone, enum_code: "WORK" }] },
        ],
        _embedded: { leads: [{ id: leadId }] },
      };

      await fetch(`https://${AMOCRM_DOMAIN}/api/v4/contacts`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AMOCRM_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([contactData]),
      });
    }

    return NextResponse.json({ success: true, message: "Lead and Contact processed successfully" });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Invalid request data" },
      { status: 400 }
    );
  }
}