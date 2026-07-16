export interface GoogleSheetPayload {
  fullName: string;
  email: string;
  phone: string;
  occupation: string;
  goal: string;
  challenge: string;
  paymentStatus: string;
  transactionId: string;
  whatsappStatus: string;
}

export async function submitRegistration(payload: GoogleSheetPayload) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK;
  
  if (!webhookUrl) {
    throw new Error("GOOGLE_SHEET_WEBHOOK environment variable is not set.");
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Google Apps Script responded with status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error: any) {
    console.error("Google Sheets Submission Error:", error);
    return { success: false, message: error.message || "Failed to submit to Google Sheets" };
  }
}
