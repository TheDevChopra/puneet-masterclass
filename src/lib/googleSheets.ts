export interface GoogleSheetPayload {
  action?: "insert" | "update";
  fullName?: string;
  email?: string;
  phone: string; // Required for both insert and update as a key
  occupation?: string;
  goal?: string;
  challenge?: string;
  paymentStatus?: string;
  transactionId?: string;
  whatsappStatus?: string;
}

export async function submitRegistration(payload: GoogleSheetPayload) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK;
  
  if (!webhookUrl) {
    throw new Error("GOOGLE_SHEET_WEBHOOK environment variable is not set.");
  }

  // Set default action to insert if not provided
  if (!payload.action) {
    payload.action = "insert";
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Google Apps Script responded with status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error: any) {
    console.error("Google Sheets Submission Error:", error);
    
    let errorMessage = "Failed to submit to Google Sheets";
    if (error.name === 'AbortError') {
      errorMessage = "Request to Google Sheets timed out.";
    } else if (error.message) {
      errorMessage = error.message;
    }

    return { success: false, message: errorMessage };
  }
}
