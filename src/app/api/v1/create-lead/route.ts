import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";


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

    // STEP 1: Check for an existing contact by email
    const existingContact = await findContactByEmail(AMOCRM_DOMAIN, AMOCRM_ACCESS_TOKEN, email);

    // STEP 2: Prepare lead data (without embedding contact)
    const leadData = {
      name,
      custom_fields_values: [
        { field_id: 673759, values: [{ value: email }] }, // Example field
        { field_id: 673735, values: [{ value: message }] },
        { field_id: 673739, values: [{ value: purpose }] },
        { field_id: 673743, values: [{ value: _subject }] },
        { field_id: 673741, values: [{ value: phone }] },
      ],
    };

    // Create the lead first
    const leadId = await createLead(AMOCRM_DOMAIN, AMOCRM_ACCESS_TOKEN, leadData);

    let contactId: string | undefined;

    if (existingContact) {
      // If contact exists, use its ID
      contactId = existingContact.id;
    } else {
      // If no contact exists, create a new one
      const contactData: { name: string; custom_fields_values: { field_id?: number; field_code?: string; values: { value: string; enum_code: string }[] }[] } = {
        name,
        custom_fields_values: [
          { field_code: "EMAIL", values: [{ value: email, enum_code: "WORK" }] },
          { field_code: "PHONE", values: [{ value: phone, enum_code: "WORK" }] },
          { field_code: "POSITION", values: [{ value: purpose, enum_code: "WORK" }] },
        ],
      };

      contactId = await createContact(AMOCRM_DOMAIN, AMOCRM_ACCESS_TOKEN, contactData);
    }

    // STEP 3: Link the contact to the lead using the linking endpoint
      await linkContactToLead(AMOCRM_DOMAIN, AMOCRM_ACCESS_TOKEN, leadId, contactId);

    return NextResponse.json({
      success: true,
      message: existingContact
        ? "Lead created and linked to existing contact"
        : "Lead created and new contact added",
      leadId,
      contactId,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}

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
      (field.field_code === "EMAIL" || (field.field_name?.toUpperCase().includes("EMAIL"))) &&
      field.values?.some((valueObj: { value?: string }) => valueObj.value?.toLowerCase() === email.toLowerCase())
    )
  );
}

// Create a lead
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

// Create a new contact
async function createContact(domain: string, token: string, contactData: { name: string; custom_fields_values: { field_id?: number; field_code?: string; values: { value: string; enum_code: string }[] }[] }) {
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

// Link a contact to a lead using the Entity Links API
async function linkContactToLead(domain: string, token: string, leadId: string, contactId: string | undefined) {
  if (!contactId) {
    throw new Error("Contact ID is undefined");
  }

  const linkResponse = await fetch(`https://${domain}/api/v4/leads/${leadId}/link`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify([
      {
        to_entity_id: contactId,
        to_entity_type: "contacts",
        metadata: { is_main: true },
      },
    ]),
  });
  
  if (!linkResponse.ok) {
    const errorData = await linkResponse.json();
    throw new Error(JSON.stringify(errorData));
  }
  
  return await linkResponse.json();
}
