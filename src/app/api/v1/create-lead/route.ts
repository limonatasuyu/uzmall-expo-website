import { NextResponse, type NextRequest } from "next/server";
import path from "node:path";
import fs from "node:fs";

const logToFile = (message: string) => {
  const timestamp = new Date().toISOString();
  const logMessage = `${timestamp} - ${message}\n`;
  fs.appendFileSync("create-lead.log", logMessage);
};

async function makePostRequest(request: NextRequest) {
  const { name, email, phone, purpose, message, _subject } = await request.json();

  const { AMOCRM_DOMAIN, AMOCRM_ACCESS_TOKEN } = process.env;
  const contentId = 673735;
  const sourceId = 673741;
  //const mediumId = 673737;
  const campaignId = 673739;
  const termId = 673743;
  //const referrerId = 673745;
  //const roistatId = 673747;
  //const openstatServiceId = 673751;
  //const openstatCampaignId = 673753;
  //const openstatAdId = 673755;
  //const openstatSourceId = 673757;
  const fromId = 673759;

  /**
 *  
 *{ code: 'UTM_CONTENT', id: 673735 },
  { code: 'UTM_MEDIUM', id: 673737 },
  { code: 'UTM_CAMPAIGN', id: 673739 },
  { code: 'UTM_SOURCE', id: 673741 },
  { code: 'UTM_TERM', id: 673743 },
  { code: 'UTM_REFERRER', id: 673745 },
  { code: 'ROISTAT', id: 673747 },
  { code: 'REFERRER', id: 673749 },
  { code: 'OPENSTAT_SERVICE', id: 673751 },
  { code: 'OPENSTAT_CAMPAIGN', id: 673753 },
  { code: 'OPENSTAT_AD', id: 673755 },
  { code: 'OPENSTAT_SOURCE', id: 673757 },
  { code: 'FROM', id: 673759 },
  { code: 'GCLIENTID', id: 673761 },
  { code: '_YM_UID', id: 673763 },
  { code: '_YM_COUNTER', id: 673765 },
  { code: 'GCLID', id: 673767 },
  { code: 'YCLID', id: 673769 },
  { code: 'FBCLID', id: 673771 },

 */
  const leadData = {
    name,
    custom_fields_values: [
      {
        field_id: fromId,
        values: [{ value: email }],
      },
      {
        field_id: contentId,
        values: [{ value: message }],
      },
      {
        field_id: campaignId,
        values: [{ value: purpose }],
      },
      {
        field_id: termId,
        values: [{ value: _subject }],
      },
      {
        field_id: sourceId,
        values: [{ value: phone }],
      },
    ],
  };

  const response = await fetch(`https://${AMOCRM_DOMAIN}/api/v4/leads`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AMOCRM_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([leadData]),
  });

  const contentType = response.headers.get("content-type");

  if (!response.ok) {
    let errorMessage = `AmoCRM API Error: ${response.status} ${response.statusText}`;
    if (contentType?.includes("application/json")) {
      const errorData = await response.json();
      errorMessage += ` - ${JSON.stringify(errorData)}`;
    } else if (contentType?.includes("text/html")) {
      const responseText = await response.text();
      errorMessage += ` - ${responseText.substring(0, 200)}${responseText.length > 200 ? "..." : ""}`;
    }
    throw new Error(errorMessage);
  }

  const responseData = await response.json();
  console.log("Lead created successfully", JSON.stringify(responseData));
  return NextResponse.json({
    success: true,
    message: "Lead created successfully",
    data: null,
  });
}
console.log(makePostRequest);
export async function POST(request: NextRequest) {
  console.log("POST request received", request);
  const { AMOCRM_DOMAIN, AMOCRM_ACCESS_TOKEN } = process.env;

  const response = await fetch(`https://${AMOCRM_DOMAIN}/api/v4/catalogs`, {
    headers: {
      Authorization: `Bearer ${AMOCRM_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  const contentType = response.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    const responseData = await response.json();
    console.log("Response data:", JSON.stringify(responseData));
    logToFile(`Response data: ${JSON.stringify(responseData)}`);
  } else {
    const responseText = await response.text();
    console.log("Response text:", responseText);
    logToFile(`Response text: ${responseText}`);
    /*
  try {
    return await makePostRequest(request);
  } catch (error: unknown) {
    console.error("Error in POST request:", error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Failed to create lead",
        data: null,
      },
      { status: 500 }
    );
  }
*/
  }
}
/*
async function updateLead(leadData: { leadId: string, email: string, phone: string, message: string, purpose: string, _subject: string }) {
  const { leadId, email, phone, message, purpose, _subject } = leadData;

  const { AMOCRM_DOMAIN, AMOCRM_ACCESS_TOKEN } = process.env;
  const contentId = 673735;
  const sourceId = 673741;
  const campaignId = 673739;
  const termId = 673743;
  const fromId = 673759;

  const updatedLeadData = {
    id: leadId, // Required: the ID of the lead to update
    custom_fields_values: [
      {
        field_id: fromId,
        values: [{ value: email }],
      },
      {
        field_id: contentId,
        values: [{ value: message }],
      },
      {
        field_id: campaignId,
        values: [{ value: purpose }],
      },
      {
        field_id: termId,
        values: [{ value: _subject }],
      },
      {
        field_id: sourceId,
        values: [{ value: phone }],
      },
    ],
  };

  const response = await fetch(`https://${AMOCRM_DOMAIN}/api/v4/leads/${leadId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${AMOCRM_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedLeadData),
  });

  const contentType = response.headers.get("content-type");

  if (!response.ok) {
    let errorMessage = `AmoCRM API Error: ${response.status} ${response.statusText}`;
    if (contentType?.includes("application/json")) {
      const errorData = await response.json();
      errorMessage += ` - ${JSON.stringify(errorData)}`;
    } else if (contentType?.includes("text/html")) {
      const responseText = await response.text();
      errorMessage += ` - ${responseText.substring(0, 200)}${responseText.length > 200 ? "..." : ""}`;
    }
    throw new Error(errorMessage);
  }

  const responseData = await response.json();
  console.log("Lead updated successfully", JSON.stringify(responseData));
  return NextResponse.json({
    success: true,
    message: "Lead updated successfully",
    data: null,
  });
}

*/
