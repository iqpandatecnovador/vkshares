export async function createHubSpotContact(email: string, phone: string | null = null, name: string | null = null) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  
  if (!token) {
    console.warn("HUBSPOT_ACCESS_TOKEN is missing. Skipping CRM sync in development.");
    return false;
  }

  try {
    const properties: Record<string, string> = {
      email: email,
      hs_lead_status: "NEW",
      lifecyclestage: "lead",
      message: "Lead capturado a través del AI Concierge",
    };

    if (phone) properties.phone = phone;
    if (name) properties.firstname = name;

    const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ properties })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("HubSpot API Error:", errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Failed to connect to HubSpot:", error);
    return false;
  }
}
