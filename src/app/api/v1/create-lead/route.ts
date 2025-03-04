import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Fetch contacts and find a matching one by email
async function findContactByEmail(domain: string, token: string, email: string) {
  const contactsResponse = await fetch(`https://${domain}/api/v4/contacts`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  
  if (!contactsResponse.ok) {
    throw new Error("Failed to fetch contacts");
  }
  
  const contactsData = await contactsResponse.json();
  const contacts = contactsData?._embedded?.contacts || [];
  
  return contacts.find((c: { custom_fields_values?: { field_code?: string; field_name?: string; values?: { value?: string }[] }[] }) =>
    c.custom_fields_values?.some((field: { field_code?: string; field_name?: string; values?: { value?: string }[] }) =>
      (field.field_code === "EMAIL" ||
        (field.field_name?.toUpperCase().includes("EMAIL"))) &&
      field.values?.some((valueObj: { value?: string }) => valueObj.value?.toLowerCase() === email.toLowerCase())
    )
  );
}

// Create a lead with optional contact link
async function createLead(domain: string, token: string, leadData: { name: string; custom_fields_values: { field_id: number; values: { value: string }[] }[] }) {
  const leadResponse = await fetch(`https://${domain}/api/v4/leads`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([leadData]),
  });
  
  if (!leadResponse.ok) {
    const errorData = await leadResponse.json();
    throw new Error(JSON.stringify(errorData));
  }
  
  const leadResponseData = await leadResponse.json();
  const leadId = leadResponseData?._embedded?.leads?.[0]?.id;
  
  if (!leadId) {
    throw new Error("Lead ID not found");
  }
  
  return leadId;
}

// Create a new contact linked to a lead
async function createContact(domain: string, token: string, contactData: { name: string; custom_fields_values: { field_code: string; values: { value: string; enum_code: string }[] }[] }) {
  const createContactResponse = await fetch(`https://${domain}/api/v4/contacts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([contactData]),
  });
  
  if (!createContactResponse.ok) {
    const errorData = await createContactResponse.json();
    throw new Error(JSON.stringify(errorData));
  }
  
  const createContactData = await createContactResponse.json();
  return createContactData?._embedded?.contacts?.[0]?.id;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, purpose, message, _subject } = await request.json();
    const { AMOCRM_DOMAIN, AMOCRM_ACCESS_TOKEN } = process.env;

    if (!AMOCRM_DOMAIN || !AMOCRM_ACCESS_TOKEN) {
      return NextResponse.json(
        { success: false, message: "Missing AmoCRM credentials" },
        { status: 500 }
      );
    }

    // STEP 1: Find existing contact by email
    const existingContact = await findContactByEmail(AMOCRM_DOMAIN, AMOCRM_ACCESS_TOKEN, email);

    // STEP 2: Prepare lead data
    const leadData: {
      name: string;
      custom_fields_values: { field_id: number; values: { value: string }[] }[];
      _embedded?: { contacts: { id: string }[] };
    } = {
      name,
      custom_fields_values: [
        { field_id: 673759, values: [{ value: email }] }, // from
        { field_id: 673735, values: [{ value: message }] }, // utm_content
        { field_id: 673739, values: [{ value: purpose }] }, // utm_campaign
        { field_id: 673743, values: [{ value: _subject }] }, // utm_term
        { field_id: 673741, values: [{ value: phone }] }, // utm_source
      ],
    };

    if (existingContact) {
      leadData._embedded = { contacts: [{ id: existingContact.id }] };
    }

    // Create the lead
    const leadId = await createLead(AMOCRM_DOMAIN, AMOCRM_ACCESS_TOKEN, leadData);

    // STEP 3: If no matching contact was found, create a new one
    if (!existingContact) {
      const contactData = {
        name,
        custom_fields_values: [
          { field_code: "EMAIL", values: [{ value: email, enum_code: "WORK" }] },
          { field_code: "PHONE", values: [{ value: phone, enum_code: "WORK" }] },
        ],
        _embedded: { leads: [{ id: leadId }] },
      };

      const newContactId = await createContact(AMOCRM_DOMAIN, AMOCRM_ACCESS_TOKEN, contactData);
      
      return NextResponse.json({
        success: true,
        message: "Lead created and new contact added",
        leadId,
        contactId: newContactId,
      });
    }

    // If a matching contact exists, the lead was created with the contact embedded
    return NextResponse.json({
      success: true,
      message: "Lead created and linked to existing contact",
      leadId,
      contactId: existingContact.id,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : "Unknown error occurred" },
      { status: 500 }
    );
  }
}
